// https://<your-site.com>/api/revalidate?tag=collection&secret=<token>
// http://localhost:3000/api/revalidate?path=/&secret=e6de1ae9a7e78df372c189fb3aaa578b
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const token = process.env.MY_SECRET_TOKEN as string;

export const GET = async (req: NextRequest, res: NextResponse) => {
  const secret = req.nextUrl.searchParams.get("secret");
  const path = req.nextUrl.searchParams.get("path") as string;

  if (secret !== token) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  revalidatePath(path);
  return NextResponse.json({ revalidated: true, now: Date.now() });
};
