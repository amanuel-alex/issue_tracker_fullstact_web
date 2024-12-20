// "use client";
import delay from "delay";
import { PrismaClient } from "@prisma/client";
import {Table } from "@radix-ui/themes";

import React from "react";
import IssueShowBadge from "@/app/componets/issueShowBadge";
import IssueAction from "../api/issues/IssueAction";
const page = async () => {
  const prisma = new PrismaClient();
  const issues = await prisma.issue.findMany();
  await delay(4000);
  return (
    <>
      <IssueAction />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issues</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                {issue.title}
                <div className="block md:hidden">
                  <IssueShowBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell>{issue.description}</Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueShowBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default page;
