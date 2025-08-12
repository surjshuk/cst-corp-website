"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { INPUT } from "@/app/assets/";
import { Textarea } from "@/components/ui/textarea";

// Type for the form data

interface JobApplicationFormProps {
  job_id: number;
}

export const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ job_id }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  
  // Schema for form validation
  const formSchema = z
  .object({
    firstName: z.string().min(2, { message: "Name must be at least 2 characters." }),
    lastName: z.string(),
    email: z.string().email({ message: "Please enter a valid email address." }),
    description: job_id === 45
      ? z.string().min(1, { message: "This field is required." })
      : z.string().optional(),
    phone: z
      .string()
      .regex(/^\+?[1-9]\d{1,14}$/, { message: "Please enter a valid phone number." }),
    resumeFile: z
      .instanceof(File)
      .optional()
      .refine((file) => file?.size, { message: "Please upload a valid PDF file. (5mb or less)" }),
    resumeUrl: z.string().url().optional(),
  })

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      description: ""
    },
  });

  // Handle form submission
  const onSubmit = async (values: FormData) => {
    setIsSubmitting(true);
    // TODO: toast not working
    toast({
      description: "submitting.",
    })
    try {
      // handle file upload
      if (values.resumeFile) {
        const { getUrl, uploadUrl } = await fetchPresignedUrls();
        await uploadFileToS3(uploadUrl, values.resumeFile);
        values.resumeUrl = getUrl; // Assign the S3 URL
      }

      // Submit application data
      await submitApplication({ ...values, job_id });

      router.replace("/culture#jobs");
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Submission failed. Please try again or contact us via email."
      });
      console.error("Failed to submit application:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fetch presigned URLs from the backend
  const fetchPresignedUrls = async () => {
    const response = await fetch("/api/jobs/apply", { method: "GET" });
    if (!response.ok) throw new Error("Failed to fetch presigned URLs");
    return response.json();
  };

  // Upload file to S3
  const uploadFileToS3 = async (uploadUrl: string, file: File) => {
    const response = await fetch(uploadUrl, {
      method: "PUT",
      headers: { "Content-Type": file.type },
      body: file,
    });
    if (!response.ok) throw new Error("Failed to upload file to S3");
  };

  // Submit application to the backend
  const submitApplication = async (data: FormData & { job_id: number }) => {
    toast({
      description: "submitting...",
    })
    const response = await fetch("/api/jobs/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({...data, name: `${data.firstName} ${data.lastName}`}),
    });

    if (response.ok) {
      toast({
        description: "You application sent successfully.",
      })
    }
    if (!response.ok) throw new Error("Failed to submit application");
  };

  return (
    <div className="tablet:min-w-[412px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[6px]">
          <div className="flex gap-[6px]">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="First Name*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="tel" placeholder="Phone Numer*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder={`How will you contribute${job_id == 45 ? "*" : ""}`} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="resumeFile"
            render={({ field: { onChange, ref, name } }) => (
              <FormItem>
                <FormControl>
                  <div className="relative h-[133px] w-full">
                    <Input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => onChange(e.target.files?.[0])}
                      name={name}
                      ref={ref}
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    />
                    <div
                      className="flex flex-col items-center justify-center h-full rounded-md bg-white shadow-sm"
                    >
                      <Image src={INPUT} className="w-9 h-9" alt="input-cloud"/>
                      <span className="text-secondary">Upload Resume</span>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting} className="w-full text-white">
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
