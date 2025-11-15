import User from "@/database/user.model";
import { handleErrorResponse, handleSuccessResponse } from "@/lib/response";

// Get User by Email
export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not Found");

    return handleSuccessResponse(user);
  } catch (error) {
    return handleErrorResponse(error);
  }
}
