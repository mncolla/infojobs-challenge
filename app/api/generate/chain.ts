import {
  DataFiltererProps,
  Education,
  EducationElement,
  Experience,
  ExperienceElement,
  FutureJob,
} from "./types";

export interface Handler {
  setNext(handler: Handler): Handler;
  handleRequest(data: any): any;
}

export class DataFilterer implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest({
    educations,
    experiences,
    futureJob,
  }: DataFiltererProps): any {
    // Realizar formateo de datos
    const filteredData = {};
    console.log("Datos filtrados:", filteredData);

    // Pasar la solicitud al siguiente Handler
    if (this.nextHandler) {
      return this.nextHandler.handleRequest(filteredData);
    }

    // Si no hay siguiente Handler, devolver los resultados finales
    return filteredData;
  }
}

export class DataFormatter implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }
  handleRequest({
    educations,
    experiences,
    futureJob,
  }: DataFiltererProps): any {
    let educationLine = "Educacion: ";
    let experienceLine = "Experiencia: ";
    let futureJobLine = "Trabajo futuro: ";

    educations.map((e: EducationElement) => {
      const { institutionName, courseName, startingDate, finishingDate } = e;

      if (courseName) educationLine += `He estudiado ${courseName} `;
      if (institutionName) educationLine += `en ${institutionName}, `;
      if (startingDate)
        educationLine += `${
          startingDate && "desde " + startingDate.toLocaleDateString("es-ES")
        } `;

      if (finishingDate)
        educationLine += `${
          finishingDate && "hasta " + finishingDate.toLocaleDateString("es-ES")
        }.`;
    });

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
      experienceLine += ` esto fue desde ${startingDate.toLocaleDateString(
        "es-ES"
      )}`;

      if (finishingDate)
        educationLine += `${
          finishingDate && "hasta " + finishingDate.toLocaleDateString("es-ES")
        }.`;

      experienceLine += ` esto pertenece a la categoría de ${category} que contiene las subcategorías ${subcategories.join(
        ","
      )}`;

      experienceLine += ` mis skills son ${expertise.join(",")}`;
    });

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

    futureJobLine += `Actualmente me encuentro ${employmentStatus}`;
    if (motivationToChange)
      futureJobLine += ` me gustaría poder cambiar debido a ${motivationToChange} `;

    if (futureJobGoals)
      futureJobLine += ` mis metas laborales son ${futureJobGoals} `;

    futureJobLine += ` cuento con ${yearsOfExperience} años de experiencia`;

    futureJobLine += ` deseo poder trabajar como ${preferredPosition} dentro de las categorias ${subcategories.join(
      ","
    )} `;

    if (contractTypes)
      futureJobLine += ` las modalidades de contratación que busco son ${contractTypes.join(
        ","
      )}`;

    if (workDay)
      futureJobLine += ` la jornada laboral de preferencia es ${workDay} `;

    futureJobLine += `la posibilidad que tengo de una re-localización es ${availabilityToChangeHomeAddress}`;
    futureJobLine += `la posibilidad que tengo para viajar es ${availabilityToTravel}`;

    if (preferredDestinations)
      futureJobLine += `mis destinos deseados para un proximo trabajo son ${preferredDestinations.join(
        ","
      )}`;

    // Pasar la solicitud al siguiente Handler
    if (this.nextHandler) {
      return this.nextHandler.handleRequest({
        educationLine,
        experienceLine,
        futureJobLine,
      });
    }

    // Si no hay siguiente Handler, devolver los resultados finales
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

  handleRequest(data: any): any {
    // Realizar el procesamiento con OpenAI
    const generatedText = {};
    console.log("Texto generado por OpenAI:", generatedText);

    // Devolver los resultados finales
    return generatedText;
  }
}
