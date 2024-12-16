"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@radix-ui/themes";
import Simplemde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import Axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}
const newIssuespage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();
  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit((data) => {
        Axios.post("/api/issues", data);
        router.push("/issues");
      })}
    >
      <TextField.Root placeholder="Title" {...register("title")}>
        <TextField.Slot></TextField.Slot>
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Simplemde placeholder="Description" {...field}></Simplemde>
        )}
      />

      <Button>Submit New Issue</Button>
    </form>
  );
};

export default newIssuespage;
