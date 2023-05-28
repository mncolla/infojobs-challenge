import { cookies } from "next/headers";
import { Fetcher } from "../utils/fetcher";
import { Curriculum, TextCVResponse } from "@/app/types";

const BASE_URL_API = "https://api.infojobs.net/api";
const appToken = process.env.APP_TOKEN;

export async function GET(request: Request) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value || null;

  const headers = {
    Authorization: `Basic ${appToken}, Bearer ${accessToken}`,
  };
  const fetcher = new Fetcher(BASE_URL_API, headers);

  const curriculums: Curriculum[] = await fetcher.get("/2/curriculum");

  const cvtexts: TextCVResponse[] = await Promise.all(
    curriculums.map(async ({ principal, code, name }) => {
      const { cvtext } = await fetcher.get(`/1/curriculum/${code}/cvtext`);
      return { text: cvtext, isPrincipal: principal, id: code, name };
    })
  );

  return new Response(JSON.stringify({ data: cvtexts }), { status: 200 });
}

export async function PUT(request: Request) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value || null;

  const headers = {
    Authorization: `Basic ${appToken}, Bearer ${accessToken}`,
  };
  const fetcher = new Fetcher(BASE_URL_API, headers);

  const { cvtext, curriculumId } = await request.json();

  const response = await fetcher.put(`/1/curriculum/${curriculumId}/cvtext`, {
    cvtext,
  });

  return new Response(JSON.stringify({ data: response }), { status: 200 });
}
