export interface Curriculum {
  id: number;
  code: string;
  name: string;
  principal: boolean;
  completed: boolean;
  incompleteSteps: string[];
}

export interface Education {
  educations: EducationElement[];
}

export interface EducationElement {
  id: number;
  educationLevelCode: string;
  courseName?: string;
  finishingDate: Date;
  stillEnrolled: boolean;
  institutionName: string;
  hideEducation: boolean;
  courseCode?: string;
  startingDate?: Date;
}

export interface Experience {
  experience: ExperienceElement[];
}

export interface ExperienceElement {
  id: string;
  company: string;
  job: string;
  description?: string;
  startingDate: Date;
  finishingDate?: Date;
  onCourse: boolean;
  industry: string;
  level: string;
  staff?: string;
  category: string;
  subcategories: string[];
  hideSalary: boolean;
  salaryMin?: string;
  salaryMax?: string;
  salaryPeriod?: string;
  visible: string;
  expertise: Expertise[];
}

export interface Expertise {
  skill: string;
}

export interface FutureJob {
  employmentStatus: string;
  motivationToChange?: string;
  futureJobGoals?: string;
  yearsOfExperience: string;
  lastJobSearch?: string;
  lastJobSearchDetails?: string;
  preferredPosition: string;
  subcategories: string[];
  contractTypes?: string[];
  workDay?: string;
  availabilityToChangeHomeAddress: string;
  availabilityToTravel: string;
  preferredDestinations?: string[];
  salaryPeriod?: string;
  salaryMin?: string;
  preferredSalary?: string;
  working?: string;
}

export interface DataFiltererProps {
  educations: EducationElement[];
  experiences: ExperienceElement[];
  futureJob: FutureJob;
}
