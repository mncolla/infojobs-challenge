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
  private educations: EducationElement[];
  private experiences: ExperienceElement[];
  private futureJob: FutureJob;

  constructor({ educations, experiences, futureJob }: DataFiltererProps) {
    this.educations = educations;
    this.experiences = experiences;
    this.futureJob = futureJob;
  }

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }
  handleRequest(data: any): any {
    let lines = "Educacion: ";

    this.educations.map((e: EducationElement) => {
      const { institutionName, courseName, startingDate, finishingDate } = e;

      if (courseName) lines += `He estudiado ${courseName} `;
      if (institutionName) lines += `en ${institutionName}, `;
      if (startingDate)
        lines += `${
          startingDate && "desde " + startingDate.toLocaleDateString("es-ES")
        } `;

      if (finishingDate)
        lines += `${
          finishingDate && "hasta " + finishingDate.toLocaleDateString("es-ES")
        }.`;
    });

    console.log("Datos filtrados:", lines);

    // Pasar la solicitud al siguiente Handler
    if (this.nextHandler) {
      return this.nextHandler.handleRequest(lines);
    }

    // Si no hay siguiente Handler, devolver los resultados finales
    return lines;
  }
}

export class DataFormatter implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(data: any): any {
    // Realizar formateo de datos
    const formattedData = {};
    console.log("Datos formateados:", formattedData);

    // Pasar la solicitud al siguiente Handler
    if (this.nextHandler) {
      return this.nextHandler.handleRequest(formattedData);
    }

    // Si no hay siguiente Handler, devolver los resultados finales
    return formattedData;
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
