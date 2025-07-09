import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

// TODO: Query only number not objects
const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function GET() {
  try {
      const jobs_database_id = process.env.NOTION_JOBS_DATABASE_ID || '';
      const job_info = await notion.databases.query({
          filter: {
            property: "Status",
            select: {
              equals: "OPEN"
            }
          },
          database_id: jobs_database_id!,
          page_size: undefined
      });

      return NextResponse.json({ total_jobs: job_info.results.length }, { status: 200 })
  } catch (error) {
      console.error('Error creating Notion page:', error);
      return new Response('Failed to create Notion page!', {status: 500});
  }
}