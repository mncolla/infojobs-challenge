import { cookies } from "next/headers";
import { AIProcessor, DataFormatter } from "./chain";
import { Fetcher } from "./fetcher";
import { Curriculum, Education, Experience, FutureJob } from "./types";

const BASE_URL_API = "https://api.infojobs.net/api";
const appToken = process.env.APP_TOKEN;

export async function GET(request: Request) {
  try {
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

    // get cv for auth user
    const [curriculum]: Curriculum[] = await fetcher.get("/2/curriculum");

    const curriculumId = curriculum.code;

    const { education }: Education = await fetcher.get(
      `/1/curriculum/${curriculumId}/education`
    );

    const { experience: experiences }: Experience = await fetcher.get(
      `/2/curriculum/${curriculumId}/experience`
    );

    /*     const futureJob: FutureJob = await fetcher.get(
      `/4/curriculum/${curriculumId}/futurejob`
    ); */

    const dataFilterer = new DataFormatter();
    const aiProcessor = new AIProcessor();

    dataFilterer.setNext(aiProcessor);

    const text = await dataFilterer.handleRequest({
      education,
      experiences,
    });

    return new Response(JSON.stringify({ text }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
