import { cookies } from "next/headers";
import { AIProcessor, DataFilterer, DataFormatter } from "./chain";
import { Fetcher } from "./fetcher";
import { Curriculum, Education, Experience, FutureJob } from "./types";

const BASE_URL_API = "https://www.infojobs.net/api";

export async function GET(request: Request) {
  try {
    const cookieStore = cookies();

    if (!cookieStore.has("access_token") && !cookieStore.has("basic_token")) {
      return new Response(JSON.stringify({ error: "Not authorized" }), {
        status: 401,
      });
    }

    const basicToken = cookieStore.get("basic_token");
    const accessToken = request.headers.get("acces_token");

    const headers = {
      Authorization: `Basic ${basicToken}, Bearer ${accessToken}`,
    };
    const fetcher = new Fetcher(BASE_URL_API, headers);

    // get cv for auth user
    const [curriculum]: Curriculum[] = await fetcher.get("/2/curriculum");
    const curriculumId = curriculum.code;

    const { educations }: Education = await fetcher.get(
      `/1/curriculum/${curriculumId}/education`
    );

    const { experience: experiences }: Experience = await fetcher.get(
      `/2/curriculum/${curriculumId}/experience`
    );

    const futureJob: FutureJob = await fetcher.get(
      `/4/curriculum/${curriculumId}/futurejob`
    );

    const dataFilterer = new DataFilterer();
    const dataFormatter = new DataFormatter();
    const aiProcessor = new AIProcessor();

    dataFilterer.setNext(dataFormatter);
    dataFormatter.setNext(aiProcessor);

    const text = dataFilterer.handleRequest({
      educations,
      experiences,
      futureJob,
    });

    return new Response(JSON.stringify({ text }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
