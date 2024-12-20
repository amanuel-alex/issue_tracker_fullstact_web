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
import ErrorMessage from "@/app/componets/ErrorMessage";
import Spinner from "@/app/componets/Spinner";

type IssueForm = z.infer<typeof createdIssueSchema>;

const newIssuespage = () => {
  const [isSubmitting, setSubmitting] = useState(false);
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

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);
    try {
      const response = await Axios.post("/api/issues", data);
      setSubmitting(false);
      if (response.status === 201) {
        router.push(`/issues/${response.data.id}`);
      }
    } catch (error) {
      setSubmitting(false);
      setError("An error occurred while creating the issue");
    }
  });
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root className="mb-4">
          <Callout.Text color="red">{String(error)}</Callout.Text>
        </Callout.Root>
      )}
      <form className=" space-y-3" onSubmit={onSubmit}>
        <TextField.Root placeholder="Title" {...register("title")}>
          <TextField.Slot></TextField.Slot>
        </TextField.Root>

        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Simplemde placeholder="Description" {...field}></Simplemde>
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button disabled={isSubmitting}>
          Submit New Issue {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default newIssuespage;
