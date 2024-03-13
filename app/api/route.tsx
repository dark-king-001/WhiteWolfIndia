import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  return NextResponse.json({ message: "this is a message form the server" });
};
