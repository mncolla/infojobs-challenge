import { cookies } from "next/headers";
import { AIProcessor, DataFormatter } from "./chain";
import { Fetcher } from "../utils/fetcher";
import { Curriculum, Education, Experience, FutureJob } from "../../types";

const BASE_URL_API = "https://api.infojobs.net/api";
const appToken = process.env.APP_TOKEN;

export async function GET(request: Request) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access_token")?.value;

    const { searchParams } = new URL(request.url);
    const curriculumParam = searchParams.get("curriculumId");

    const headers = {
      Authorization: `Basic ${appToken}, Bearer ${accessToken}`,
    };
    const fetcher = new Fetcher(BASE_URL_API, headers);
    const curriculums: Curriculum[] = await fetcher.get("/2/curriculum");
    const curriculum = curriculums.find((cv) => cv.code === curriculumParam);

    if (!curriculum) {
      return new Response(
        JSON.stringify({ message: "Curriculum not exists" }),
        { status: 404 }
      );
    }

    const curriculumId = curriculum.code;

    const { education }: Education = await fetcher.get(
      `/1/curriculum/${curriculumId}/education`
    );

    console.log("debug educacion", education);

    const { experience: experiences }: Experience = await fetcher.get(
      `/2/curriculum/${curriculumId}/experience`
    );

    console.log("debug experiences", experiences);

    const futureJob: FutureJob = await fetcher.get(
      `/4/curriculum/${curriculumId}/futurejob`
    );

    console.log("debug future job", futureJob);

    const dataFilterer = new DataFormatter();
    const aiProcessor = new AIProcessor();

    dataFilterer.setNext(aiProcessor);

    const text = await dataFilterer.handleRequest({
      education,
      experiences,
      futureJob,
    });

    return new Response(JSON.stringify({ text }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
