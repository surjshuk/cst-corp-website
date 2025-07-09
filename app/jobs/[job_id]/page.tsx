"use client";
import { ARROWDOWN, ARROWUP } from "@/app/assets";
import { JobApplicationForm } from "@/components/sections";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TailSpin } from 'react-loader-spinner'

interface RichText {
  plain_text: string;
}

interface JobInfoBlock {
  id: string;
  type: "paragraph" | "numbered_list_item" | "bulleted_list_item";
  paragraph?: { rich_text: RichText[] };
  numbered_list_item?: { rich_text: RichText[] };
  bulleted_list_item?: { rich_text: RichText[] };
}

interface JobInfoData {
  job_title?: { title: RichText[] };
  job_location?: { rich_text: RichText[] };
  job_description?: JobInfoBlock[];
}

const page = ({ params }: { params: { job_id: number } }) => {
  return (
    <section className="bg-[#f7f7f7] pt-10 p-5 tablet:px-12 tablet:py-10 laptop:px-20 laptop:py-24">
      <h2 className="text-[40px] tablet:text-5xl mb-6 relative w-fit">
        Apply
        <Image
          src={ARROWUP}
          alt="arrow-up"
          className="absolute -top-1 -right-8 w-[27.57] h-[27.57] tablet:w-[33.92px] tablet:h-[33.92px]"
          width={33.92}
          height={33.92}
        />
      </h2>

      <div className="flex items-end flex-col-reverse gap-12 laptop:gap-28 laptop:flex-row">
        <JobApplicationForm job_id={params.job_id} />
        <JobInfo id={params.job_id} />
      </div>

      <p className="hidden text-black text-xs ml-auto w-fit mt-1.5 mb-12 gap-1 tablet:text-sm">
        Show more
        <Image
          src={ARROWDOWN}
          alt="arrow-up"
          className="w-3.5 h-3.5"
          width={33.92}
          height={33.92}
        />
      </p>
    </section>
  );
};

const JobInfo = ({ id }: { id: number }) => {
  const [jobInfo, setJobInfo] = useState<JobInfoData | null>(null);

  useEffect(() => {
    const fetchJobInfo = async () => {
      try {
        const response = await fetch(`/api/jobs/${id}`);
        const data: { job_info: JobInfoData } = await response.json();
        setJobInfo(data.job_info || null);
      } catch (error) {
        console.error("Failed to fetch job info:", error);
      }
    };

    fetchJobInfo();
  }, [id]);

  let listItemCounter = 0;

  return (
    <div className="text-[#524c4c] min-h-[555px]">
      {!jobInfo ? (
        <div className="flex-center w-full h-full">
          <TailSpin
            visible={true}
            height="20"
            width="20"
            color="#ff1e31"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="m-auto"
          />
        </div>
      ) : (
        <>
          <h5 className="text-sm font-medium">
            {jobInfo.job_location?.rich_text[0]?.plain_text || "Location not specified"}
          </h5>
          <h3 className="text-primary text-2xl font-medium">
            {jobInfo.job_title?.title[0]?.plain_text || "Title not available"}
          </h3>
          <hr className="mt-4 border-black bg-black h-px" />
        </>
      )}

      {jobInfo?.job_description?.map((block) => {
        if (block.type === "paragraph") {
          listItemCounter = 0; // Reset the counter for paragraphs
          return (
            <p key={block.id} className="text-sm mt-4 font-bold text-gray-800">
              {block.paragraph?.rich_text.map((text) => text.plain_text).join(" ")}
            </p>
          );
        }

        if (block.type === "numbered_list_item") {
          listItemCounter++;
          return (
            <ol key={block.id} start={listItemCounter} className="list-decimal list-inside">
              <li className="text-sm">
                {block.numbered_list_item?.rich_text.map((text) => text.plain_text).join(" ")}
              </li>
            </ol>
          );
        }

        if (block.type === "bulleted_list_item") {
          return (
            <ul key={block.id} className="list-disc list-inside">
              <li className="text-sm">
                {block.bulleted_list_item?.rich_text.map((text) => text.plain_text).join(" ")}
              </li>
            </ul>
          );
        }

        return null;
      })}
    </div>
  );
};

export default page;
