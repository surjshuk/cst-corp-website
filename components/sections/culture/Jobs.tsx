"use client"

import { ARROWDOWN } from "@/app/assets/"
import { buttonVariants } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ShareDialog } from "./share-dialog"
import { ArrowUpRight } from "lucide-react"

// Define Job types for better type safety
interface Job {
  id: string
  properties: {
    Title: { title: { plain_text: string }[] }
    Location: { rich_text: { plain_text: string }[] }
    Description: { rich_text: { plain_text: string }[] }
    ID: { unique_id: { number: string } }
    Department: { select: { name: string } }
  }
}

export const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>(["All"])
  const [showAllJobs, setShowAllJobs] = useState(false)
  const [openJob, setOpenJob] = useState<string>("")

  // List of available departments
  const departments = ["All", "AI & Autonomy", "Software", "Avionics", "Payload", "Hardware", "Operations", "Open To All"]

  const handleOpenJob = (job_id: string) => {
    setOpenJob((prev) => (prev === job_id ? "" : job_id))
  }

  const handleDepartmentFilter = (department: string) => {

    // select multiple departments
    // if (department === "All") {
    //   // If "All" is selected, clear other selections
    //   setSelectedDepartments(["All"])
    // } else {
    //   // If any other department is selected
    //   setSelectedDepartments((prev) => {
    //     // If "All" is currently selected, remove it
    //     const withoutAll = prev.filter((dep) => dep !== "All")

    //     // Toggle the selected department
    //     if (withoutAll.includes(department)) {
    //       // If no departments would be selected after removing this one, select "All"
    //       return withoutAll.filter((dep) => dep !== department).length === 0
    //         ? ["All"]
    //         : withoutAll.filter((dep) => dep !== department)
    //     } else {
    //       return [...withoutAll, department]
    //     }
    //   })
    // }

    // only one department at a time
    setSelectedDepartments([department])
  }

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const response = await fetch("/api/jobs")
        const data = await response.json()
        setJobs(data.jobs || [])
      } catch (error) {
        console.error("Failed to fetch jobs:", error)
      }
    }

    fetchAllJobs()
  }, [])

  // Filter jobs based on selected departments
  const filteredJobs = jobs.filter((job) => {
    // If "All" is selected or no departments are selected, show all jobs
    if (selectedDepartments.includes("All")) {
      return true
    }
    // Show job if its department is in the selected departments list
    return selectedDepartments.includes(job.properties.Department.select.name)
  })

  // Slice jobs based on showAllJobs state
  const displayedJobs = showAllJobs ? filteredJobs : filteredJobs.slice(0, 4)

  return (
    <section className="px-5 py-20 tablet:px-12 tablet:py-20 laptop:ml-0 laptop:px-20 laptop:py-28" id="jobs">
      <div className="mb-28">
        <h3 className="text-[28px] font-medium tablet:text-[40px]">
          Browse <span className="text-primary">{filteredJobs.length}</span> <br /> open positions
        </h3>
      </div>

      <div className="flex justify-between flex-col laptop:flex-row">
        <div className="text-[#757575] font-medium text-sm flex laptop:flex-col tablet:items-start flex-wrap justify-center laptop:justify-start mb-6 tablet:mb-12 laptop:mb-0 mt-4">
          {departments.map((department) => (
            <button
              key={department}
              className={`text-primary px-4 laptop:px-0 py-2 ${selectedDepartments.includes(department) ? "underline" : ""}`}
              onClick={() => handleDepartmentFilter(department)}
            >
              {department}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-5 laptop:w-7/12">
          { 
            displayedJobs.length > 0 ? 
              displayedJobs.map((job) => (
              <Collapsible
                key={job.id}
                className="border-b pb-3 space-y-1 border-black"
                open={openJob === job.id}
                onOpenChange={() => handleOpenJob(job.id)}
              >
                <CollapsibleTrigger className="text-left w-full space-y-1 py-3 tablet:py-4 tablet:space-y-1.5">
                  <p className="text-primary text-xs font-medium tablet:text-sm">
                    {job.properties.Location.rich_text[0]?.plain_text || "N/A"}
                  </p>
                  <h3 className="text-xl font-medium tablet:text-2xl">
                    {job.properties.Title.title[0]?.plain_text || "Untitled"}
                  </h3>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <p className="mb-10">{job.properties.Description.rich_text[0]?.plain_text || "N/A"}</p>
                  <p className="text-xs text-black mb-8">
                    No matching job posted? Email us anyway! <br /> Send us your CV and cover letter. 
                  </p>
                  <div className="flex gap-3">
                    <a
                      className="flex-1 bg-secondary flex-center"
                      href={`mailto:contact@cst-corp.net?subject=Job%20Inquiry%20for%20${job.properties.Title.title[0]?.plain_text || ""}`}
                    >
                      contact@cst-corp.net
                    </a>
                    <ShareDialog
                      jobTitle={job.properties.Title.title[0]?.plain_text || "Job Position"}
                      jobId={job.properties.ID.unique_id.number}
                    />
                    <Link
                      href={`/jobs/${job.properties.ID.unique_id.number}`}
                      className={`${buttonVariants()} flex-1 text-white`}
                      >
                      <ArrowUpRight /> Apply
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))
          :
            <div className="py-4">No open positions now, but stay tuned! <br /> We&apos;re always looking for passionate people like you.</div>
          }

          {filteredJobs.length > 4 ? (
            <div className="text-right">
              <button
                className="w-fit font-medium text-xs flex-center gap-2 ml-auto tablet:text-sm"
                onClick={() => setShowAllJobs((prev) => !prev)}
              >
                Show {showAllJobs ? "less" : "more"}
                <Image
                  src={ARROWDOWN || "/placeholder.svg"}
                  alt="plus"
                  className={`w-3.5 h-3.5 transition duration-300 ${showAllJobs ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

