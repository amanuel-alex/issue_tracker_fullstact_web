"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import Simplemde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import Axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import createdIssueSchema from "@/app/validationSchma";
import z from "zod";

type IssueForm = z.infer<typeof createdIssueSchema>;

const newIssuespage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createdIssueSchema),
  });
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

        {errors.title && (
          <Text color="red" as="p">
            {errors.title.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Simplemde placeholder="Description" {...field}></Simplemde>
          )}
        />
        {errors.description && (
          <Text color="red" as="p">
            {errors.description.message}
          </Text>
        )}
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default newIssuespage;
