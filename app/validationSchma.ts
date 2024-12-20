import { z } from "zod";

const createdIssueSchema = z.object({
  title: z.string().min(3, "title is required").max(255),
  description: z.string().min(5, "description is required").max(1000),
});
export default createdIssueSchema;
