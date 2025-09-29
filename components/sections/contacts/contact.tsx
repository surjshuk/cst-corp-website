"use client";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import {toast} from "react-hot-toast"

const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .regex(/^[A-Za-z\s]+$/, "First name can only contain letters and spaces"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .regex(/^[A-Za-z\s]+$/, "Last name can only contain letters and spaces")
    .optional()
    .or(z.literal("")),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .regex(/^\d{10,15}$/, "Phone number must be 10–15 digits")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .regex(/^(?!.*<script).*$/i, "Message contains invalid content"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inquiries = [
    { type: "Sales Inquiries", email: "sales@cstcorp.net" },
    { type: "Office Number", email: "(713) 263-1300" },
];

type FormErrors = Partial<Record<keyof ContactFormData, string>>;


export const Contact = () => {

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

   const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<{ loading: boolean; success: string | null; error: string | null }>({
    loading: false,
    success: null,
    error: null,
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatus({ loading: true, success: null, error: null });

    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: FormErrors = {};
      validation.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
      });
      setErrors(fieldErrors);
      setStatus({ loading: false, success: null, error: "Please fix the errors above." });
      return;
    }

    try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (result.success) {
      setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "", message: "" });
      setStatus({ loading: false, success: "Message sent successfully!", error: null });
        toast.success("Form Submited Successfully")
    } else {
      throw new Error(result.error || "Failed to send message");
    }
  } catch (err) {
    const error = err as Error;
    toast.error("Failed to submit form")
    setStatus({ loading: false, success: null, error: error.message });
  }
  };

    return (
        <div className="p-5 tablet:px-12 tablet:py-10 laptop:px-20 laptop:py-10 bg-black text-white" id="contacts">
            {/* Locations Section */}
            <div className="pb-32">
                <h2 className=" mb-3 text-[28px] leading-tight tablet:font-medium tablet:text-5xl">Locations</h2>
                <div className="space-y-6">
                    <div className="flex gap-24 font-medium">
                        <span className="text-sm">Texas</span>
                        <div className="space-y-1.5">
                            <p className="text-[10px] tablet:text-sm text-primary">HQ</p>
                            <p className="text-[10px] tablet:text-sm">12210 Bedford Street. Houston, TX 77031</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us Section */}
            <div>
                <h2 className=" text-[28px] leading-tight tablet:font-medium tablet:text-5xl">Contact us</h2>
                <div className="laptop:w-[582px] w-full my-6">
                    <form action="" className="space-y-12 ">
                        <div className="flex md:flex-row flex-col gap-12 ">
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="firstName" className="font-medium w-full text-neutral-500 text-sm">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    pattern="^[A-Za-z\s]+$"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="font-medium w-full text-2xl bg-transparent border-b-2 outline-none"
                                />
                                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="lastName" className="font-medium text-neutral-500 w-full text-sm">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    pattern="^[A-Za-z\s]+$"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="font-medium w-full text-2xl bg-transparent border-b-2 outline-none"
                                />
                                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col gap-12 ">
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="email" className="font-medium text-neutral-500 w-full text-sm">Email</label>
                               <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="font-medium w-full text-2xl bg-transparent border-b-2 outline-none"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="phoneNumber" className="font-medium text-neutral-500 w-full text-sm">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    pattern="^\d{10,15}$"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="font-medium w-full text-2xl bg-transparent border-b-2 outline-none"
                                />
                                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}

                            </div>
                        </div>
                       <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="message" className="font-medium text-neutral-500 text-sm w-full">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    minLength={10}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    className="w-full font-medium text-2xl bg-transparent border-b-2 outline-none"
                                    />
                                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                            </div>
                        <div className="flex justify-end">

                         <button onClick={handleSubmit} disabled={status.loading} className="text-sm px-6 py-3.5 bg-white hover:bg-opacity-70 text-black">
              {status.loading ? "Sending..." : "Send Message"}
            </button>
                        </div>
                    </form>
                </div>
                <div className="space-y-4 text-[10px] tablet:text-sm laptop:w-[582px]">
                    <p className="text-[#757575] text-xs tablet:text-sm tablet:font-medium">
                        By sending us an email, you confirm that you have read and agree with the following: <br />
                        In order to respond to you and send relevant information to resolve your inquiry, we and our trusted service providers may collect your personal data.
                    </p>
                    <p className="text-[#757575] text-xs tablet:text-sm tablet:font-medium">
                        Your personal data will be securely stored for a period of time in line with legal and regulatory requirements depending on the nature of your inquiry. To find out more about your rights and our privacy practices, please refer to our {" "}
                        <Link
                            href="/privary-policy"
                            className="text-[#0892D0] hover:underline">
                            Privacy Policy.
                        </Link>
                    </p>
                </div>
            </div>

            {/* Inquiries Section */}
            <div className="mt-12 flex flex-col gap-6 justify-between w-4/6 tablet:gap-10 laptop:gap-[138px] laptop:flex-row">
                {inquiries.map((inquiry, index) => (
                    <div key={index} className="">
                        <p className="text-xs tablet:text-sm">{inquiry.type}</p>
                        <p>
                            <Link
                                href={`mailto:${inquiry.email}`}
                                className="text-[#0892D0] text-[16px] tablet:text-2xl"
                            >
                                {inquiry.email}
                            </Link>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};