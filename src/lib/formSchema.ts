import { z } from "zod";

export const signUpSchema = z
  .object({
	  name: z.string().min(1, "Name is required").max(20, "Name must be under 20 characters"),
    email: z.string().email().min(1, "Email is required").max(25, "Email must be under 25 characters"),
    message: z.string().min(1, "Message is required").max(200, "Message must be at less than 200 characters"),
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;