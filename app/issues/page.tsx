"use client";

import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Button>
        <Link href="/api/issues/newIssue">New Issues</Link>
      </Button>
    </>
  );
};

export default page;
