export {
  useGetQuizQuestionsQuery,
  useSubmitQuizResultMutation,
} from "./api";

export type {
  QuizState,
  QuizConfigState,
  QuizParams,
  QuizResponse,
} from "./model";

export {
  setSpec,
  setSkills,
  setComplexity,
  setQtyQuestions,
} from "./model";

export { nextQuestion, resetQuiz } from "./model";
