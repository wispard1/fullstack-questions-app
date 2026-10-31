export interface QuizParams {
  specialization: number;
  complexity?: number;
  skills?: string[];
  qtyQuestions: number;
}

export interface QuizConfigState {
  spec: { id: number; title: string } | null;
  complexity: { id: number; title: string } | null;
  skills: Array<{ id: number; title: string }>;
  qtyQuestions: number;
}

export interface QuizState {
  currentIndex: number;
  isFinished: boolean;
  score: number;
  answers: Array<{
    questionId: number | string;
    isKnown: "KNOWN" | "UNKNOWN";
  }>;
}

export interface NextQuestionPayload {
  questionId: number | string;
  isKnown: "KNOWN" | "UNKNOWN";
  length: number;
}