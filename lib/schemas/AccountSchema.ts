import { z } from "zod";

const objectIdRegex = /^[a-fA-F0-9]{24}$/;

const AccountSchema = z.object({
  userId: z
    .string({ message: "User ID is required" })
    .regex(objectIdRegex, { message: "Invalid ObjectId" }),
  name: z.string({ message: "Name is required" }),
  image: z.string().url().optional(),
  password: z.string({ message: "Password is required" }),
  provider: z.string({ message: "Provider is required" }),
  providerAccountId: z.string({ message: "Provider account ID is required" }),
});

export default AccountSchema;
