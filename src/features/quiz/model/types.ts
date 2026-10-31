import type { Question } from "@/entities/question";
import type { SelectOption } from "@/shared/types";

export interface QuizState {
  answers: Answer[];
  currentIndex: number;
  score: number;
  isFinished: boolean;
}

export interface Answer {
  questionId: number;
  questionTitle: string;
  answer: string;
}

export interface QuizResponse {
  questions: Question[];
}

export interface QuizParams {
  specialization: number;
  skills?: string[];
  complexity?: number;
  qtyQuestions: number;
}

export interface QuizConfigState {
  spec: SelectOption | null;
  skills: SelectOption[];
  complexity: SelectOption | null;
  qtyQuestions: number;
}
