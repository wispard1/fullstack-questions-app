import type { Skill } from "../../skill";

export interface Question {
  id: number | string;
  title: string;
  rate?: number;
  complexity?: number;
  description?: string;
}

export interface QuestionDetail {
  title: string;
  content: string;
  description: string;
  shortAnswer: string;
  longAnswer: string;
  rate: number;
  complexity: number;
  keywords?: string[];
  questionSkills: Skill[];
}
