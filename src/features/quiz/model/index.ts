export type {
  QuizState,
  QuizConfigState,
  QuizParams,
  QuizResponse,
} from "./types";

export {
  setSpec,
  setSkills,
  setComplexity,
  setQtyQuestions,
} from "./quizConfigSlice";

export { nextQuestion, resetQuiz } from "./quizSlice";
