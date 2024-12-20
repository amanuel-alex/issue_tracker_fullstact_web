import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssueAction = () => {
  return (
    <div className="mb-3">
      <Button>
        <Link href="/api/issues/newIssue">New Issues</Link>
      </Button>
    </div>
  );
};

export default IssueAction;
