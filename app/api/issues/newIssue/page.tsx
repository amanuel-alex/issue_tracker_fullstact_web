"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Callout, TextField } from "@radix-ui/themes";
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
  const [error, setError] = useState("");
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root className="mb-4">
          {" "}
          <Callout.Text color="red">{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await Axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("unexpected error occured");
          }
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
    </div>
  );
};

export default newIssuespage;
