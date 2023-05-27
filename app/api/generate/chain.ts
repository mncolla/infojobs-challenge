import generateSummary from "../utils/ia";
import {
  DataFiltererProps,
  EducationElement,
  ExperienceElement,
} from "./types";

export interface Handler {
  setNext(handler: Handler): Handler;
  handleRequest(data: any): any;
}

export class DataFormatter implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }
  async handleRequest({
    education,
    experiences,
    futureJob,
  }: DataFiltererProps): Promise<any> {
    let educationLine = "Educacion: ";
    let experienceLine = "Experiencia: ";
    let futureJobLine = "Trabajo futuro: ";

    if (education) {
      education.map((e: EducationElement) => {
        const { institutionName, courseName, startingDate, finishingDate } = e;

        if (courseName) educationLine += `He estudiado ${courseName} `;
        if (institutionName) educationLine += `en ${institutionName}, `;
        if (startingDate)
          educationLine += `${
            startingDate &&
            "desde " + new Date(startingDate).toLocaleDateString("es-ES")
          } `;

        if (finishingDate)
          educationLine += `${
            finishingDate &&
            "hasta " + new Date(finishingDate).toLocaleDateString("es-ES")
          }.`;
      });
    }

    if (experiences) {
      experiences.map((e: ExperienceElement) => {
        const {
          company,
          job,
          description,
          startingDate,
          finishingDate,
          onCourse,
          category,
          subcategories,
          expertise,
        } = e;

        experienceLine += `${
          onCourse ? "Trabajo en" : "He trabajado"
        } en ${company} como ${job}`;

        if (description)
          experienceLine += ` en mi rol hacía cosas como ${experienceLine}`;
        experienceLine += ` esto fue desde ${new Date(
          startingDate
        ).toLocaleDateString("es-ES")}`;

        if (finishingDate)
          educationLine += `${
            finishingDate &&
            "hasta " + new Date(finishingDate).toLocaleDateString("es-ES")
          }.`;

        if (subcategories.length > 0)
          experienceLine += ` esto pertenece a la categoría de ${category} que contiene las subcategorías ${subcategories.join(
            ","
          )}`;

        if (expertise.length > 0) {
          experienceLine += ` mis skills son ${expertise
            .map((e) => e.skill)
            .join(",")}`;
        }
      });
    }

    if (futureJob) {
      const {
        employmentStatus,
        motivationToChange,
        futureJobGoals,
        yearsOfExperience,
        preferredPosition,
        subcategories,
        contractTypes,
        workDay,
        availabilityToChangeHomeAddress,
        availabilityToTravel,
        preferredDestinations,
      } = futureJob;

      if (employmentStatus)
        futureJobLine += `Actualmente me encuentro ${employmentStatus}`;
      if (motivationToChange)
        futureJobLine += ` me gustaría poder cambiar debido a ${motivationToChange} `;

      if (futureJobGoals)
        futureJobLine += ` mis metas laborales son ${futureJobGoals} `;

      futureJobLine += ` cuento con ${yearsOfExperience} años de experiencia`;

      if (subcategories)
        futureJobLine += ` deseo poder trabajar como ${preferredPosition} dentro de las categorias ${subcategories.join(
          ","
        )} `;

      if (contractTypes)
        futureJobLine += ` las modalidades de contratación que busco son ${contractTypes.join(
          ","
        )}`;

      if (workDay) {
        futureJobLine += ` la jornada laboral de preferencia es ${workDay} `;
      }

      if (availabilityToChangeHomeAddress) {
        futureJobLine += `la posibilidad que tengo de una re-localización es ${availabilityToChangeHomeAddress}`;
      }

      if (availabilityToTravel) {
        futureJobLine += `la posibilidad que tengo para viajar es ${availabilityToTravel}`;
      }

      if (preferredDestinations) {
        futureJobLine += `mis destinos deseados para un proximo trabajo son ${preferredDestinations.join(
          ","
        )}`;
      }
    }

    if (this.nextHandler) {
      return await this.nextHandler.handleRequest({
        education: educationLine,
        experiences: experienceLine,
        futureJob: futureJobLine,
      });
    }

    return {
      educationLine,
      experienceLine,
      futureJobLine,
    };
  }
}

export class AIProcessor implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  async handleRequest({
    education,
    experiences,
    futureJob,
  }: any): Promise<any> {
    const generatedText = await generateSummary(
      `${education}, ${experiences}, ${futureJob}`
    );
    return generatedText;
  }
}
