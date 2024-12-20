import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import createdIssueSchema from "../../validationSchma"; // Adjust the import path as necessary

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validate = createdIssueSchema.safeParse(body);

  if (!validate.success) {
    return NextResponse.json(
      { errors: validate.error.errors },
      { status: 400 }
    );
  }

  try {
    // Create a new issue in the database
    const newIssue = await prisma.issue.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    console.error("Error creating issue:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the issue" },
      { status: 500 }
    );
  }
}
