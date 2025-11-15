import Account from "@/database/account.model";
import dbConnect from "@/lib/dbConnect";
import { handleErrorResponse, handleSuccessResponse } from "@/lib/response";
import AccountSchema from "@/lib/schemas/AccountSchema";
import validateBody from "@/lib/validateBody";

// get all account
export async function GET() {
  try {
    await dbConnect();
    const accounts = await Account.find();
    return handleSuccessResponse(accounts);
  } catch (error: unknown) {
    return handleErrorResponse(error);
  }
}
// create user
export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { provider, providerAccountId } = body;

    validateBody(body, AccountSchema);

    const existingAccount = await Account.findOne({
      provider,
      providerAccountId,
    });
    if (existingAccount) throw new Error("Account already exists");

    const newAccount = await Account.create(body);

    return handleSuccessResponse(newAccount, 201);
  } catch (error: unknown) {
    return handleErrorResponse(error);
  }
}
