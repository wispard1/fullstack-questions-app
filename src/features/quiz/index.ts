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
  setToggleSkill,
  setComplexity,
  setQtyQuestions,
} from "./model";

export { nextQuestion, resetQuiz } from "./model";
