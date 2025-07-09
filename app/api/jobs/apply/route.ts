import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';
import { getObject, putObject } from './aws';
const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function GET() {
  const filename = `resumes/resume-${Date.now()}.pdf`;
  const uploadUrl = await putObject(filename, "application/pdf", { expiresIn: 900 });

  const getUrl = await getObject(filename);
  return NextResponse.json({ getUrl, uploadUrl }, { status: 200 })
}

export async function POST(request: Request) {
  const {
    name,
    email,
    phone,
    description,
    resumeUrl,
    job_id,
    source = 'Website',
  } = await request.json();
  
  try {
    const jobs_database_id = process.env.NOTION_JOBS_DATABASE_ID || '';
    const applicants_database_id = process.env.NOTION_APPLICANTS_DATABASE_ID || '';

    // Query job database to get job details by job_id
    const job_info = await notion.databases.query({
      database_id: jobs_database_id,
      filter: {
        property: "ID",
        unique_id: {
          equals: Number(job_id),
        },
      },
    });

    if (!job_info.results.length) {
      return new Response('Job not found!', { status: 404 });
    }

    await notion.pages.create({
      parent: { database_id: applicants_database_id },
      properties: {
        Name: { title: [{ text: { content: name } }] },
        Email: { email },
        Contact: { phone_number: phone },
        Resume: { url: resumeUrl || null },
        Description:  { rich_text: [{ text: { content: description } }] },
        Source: { select: { name: source } },
        Jobs: {
          relation: [{ id: job_info.results[0]?.id }],
        },
      },
    });

    return new Response('Applied Successfully!', { status: 200 });
  } catch (error) {
    console.error('Error creating Notion page:', error);
    return new Response('Failed to create Notion page!', { status: 500 });
  }
}