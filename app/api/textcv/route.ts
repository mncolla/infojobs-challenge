import { cookies } from "next/headers";
import { Fetcher } from "../utils/fetcher";

const BASE_URL_API = "https://api.infojobs.net/api";
const appToken = process.env.APP_TOKEN;

export async function GET(request: Request) {
  const cookieStore = cookies();

  const accessToken: any = cookieStore.get("access_token")?.value;

  if (!accessToken) {
    return new Response(JSON.stringify({ error: "Not authorized" }), {
      status: 401,
    });
  }

  const headers = {
    Authorization: `Basic ${appToken}, Bearer ${accessToken}`,
  };
  const fetcher = new Fetcher(BASE_URL_API, headers);

  const textCv = await fetcher.get("/1/curriculum/{curriculumId}/cvtext");

  console.log(textCv);

  return new Response(JSON.stringify({ textCv }), { status: 200 });
}

export async function PUT(request: Request) {}
