import { cookies } from "next/headers";
import { Fetcher } from "../utils/fetcher";
import { Curriculum } from "@/app/types";

const BASE_URL_API = "https://api.infojobs.net/api";
const appToken = process.env.APP_TOKEN;

export async function GET(request: Request) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value || null;

  const headers = {
    Authorization: `Basic ${appToken}, Bearer ${accessToken}`,
  };
  const fetcher = new Fetcher(BASE_URL_API, headers);
  const [curriculum]: Curriculum[] = await fetcher.get("/2/curriculum");
  const curriculumId = curriculum.code;
  const { cvtext } = await fetcher.get(`/1/curriculum/${curriculumId}/cvtext`);

  return new Response(JSON.stringify({ data: cvtext }), { status: 200 });
}

export async function PUT(request: Request) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value || null;

  const headers = {
    Authorization: `Basic ${appToken}, Bearer ${accessToken}`,
  };
  const fetcher = new Fetcher(BASE_URL_API, headers);
  const [curriculum]: Curriculum[] = await fetcher.get("/2/curriculum");
  const curriculumId = curriculum.code;
  const cvtext = await request.json();

  const response = await fetcher.put(`/1/curriculum/${curriculumId}/cvtext`, {
    cvtext,
  });

  return new Response(JSON.stringify({ data: response }), { status: 200 });
}
