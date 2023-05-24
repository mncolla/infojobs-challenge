import { AIProcessor, DataFilterer, DataFormatter } from "./chain";
import { Fetcher } from "./fetcher";
import {
  Curriculum,
  Education,
  EducationElement,
  Experience,
  FutureJob,
} from "./types";

const BASE_URL_API = "https://www.infojobs.net/api";

export async function GET(request: Request) {
  const code = request.headers.get("InfoJobs-Code");
  const accessToken = request.headers.get("Access-Token");

  const headers = {
    Authorization: `Basic ${code}, Bearer ${accessToken}`,
  };

  try {
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

    const dataFilterer = new DataFilterer({
      educations,
      experiences,
      futureJob,
    });
    const dataFormatter = new DataFormatter();
    const aiProcessor = new AIProcessor();

    dataFilterer.setNext(dataFormatter);
    dataFormatter.setNext(aiProcessor);

    return new Response(JSON.stringify({}), { status: 200 });
  } catch (error) {}
}
