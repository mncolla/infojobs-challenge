export class CVBuilder {
  private education!: string;
  private experience!: string;
  private futureJob!: string;

  constructor(private readonly curriculumId: string) {}

  setEducation = (education: string): CVBuilder => {
    this.education = education;
    return this;
  };

  setExperience = (experience: string): CVBuilder => {
    this.experience = experience;
    return this;
  };

  setFutureJob = (futureJob: string): CVBuilder => {
    this.futureJob = futureJob;
    return this;
  };

  build = (): string => {
    const formattedCV = `
        ${JSON.stringify(this.education)},
        ${JSON.stringify(this.experience)},
        ${JSON.stringify(this.futureJob)}
    `;

    return formattedCV;
  };
}
