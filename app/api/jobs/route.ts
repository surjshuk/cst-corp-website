import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const limit = parseInt(searchParams?.get('limit') || '', 10);

  try {
      const jobs_database_id = process.env.NOTION_JOBS_DATABASE_ID || '';
      const jobs = await notion.databases.query({
          filter: {
            property: "Status",
            select: {
              equals: "OPEN"
            }
          },
          sorts: [
            // {
            //   timestamp: "last_edited_time",
            //   direction: "descending" // or "ascending" based on your needs
            // },
            {
              property: "Priority",
              direction: "descending"
            }
          ],
          database_id: jobs_database_id!, 
          page_size: limit || undefined
      });

      return NextResponse.json({ jobs: jobs.results }, { status: 200 })
  } catch (error) {
      console.error('Error creating Notion page:', error);
      return new Response('Failed to create Notion page!', {status: 500});
  }
}