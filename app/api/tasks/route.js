import db from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const tasks = await db.task.findMany();
  return NextResponse.json({ data: tasks }, { status: 200 });
}

export const POST = async (request) => {
  const data = await request.json();
  const tasks = await db.task.create(
    { data:
      {
        content: data.taskContent
      }
    }
  );
  return NextResponse.json({ data: tasks }, { status: 200 });
}