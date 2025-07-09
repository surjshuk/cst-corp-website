import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function GET(request, {params}) {
  const { job_id } = params;
  const jobs_database_id = process.env.NOTION_JOBS_DATABASE_ID || '';

  try {
      const job_info = await notion.databases.query({
        database_id: jobs_database_id,
        filter: {
          property: "ID",
          unique_id: {
            equals: Number(job_id),
          },
        },
      });
      
      const res = await notion.blocks.children.list({ block_id: job_info.results[0]?.id });
      return NextResponse.json({ job_info: {job_description: res.results, job_title: job_info.results[0]?.properties.Title, job_location: job_info.results[0]?.properties.Location } }, { status: 200 })
  } catch (error) {
      console.error('Error creating Notion page:', error);
      return new Response('Failed to create Notion page!', {status: 500});
  }
}