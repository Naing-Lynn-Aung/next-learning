import { z } from "zod";

const UserSchema = z.object({
  name: z.string().max(20),
  username: z.string().max(20),
  email: z.string().email(),
  image: z.string().url(),
});

export default UserSchema;
