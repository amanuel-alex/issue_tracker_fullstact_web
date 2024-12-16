import { TextField } from "@radix-ui/themes";
import React from "react";

const newIssuespage = () => {
  return (
    <div className="max-w-xl">
      <TextField.Root placeholder="Title">
        <TextField.Slot></TextField.Slot>
      </TextField.Root>
    </div>
  );
};

export default newIssuespage;
