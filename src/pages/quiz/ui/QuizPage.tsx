import { useDispatch, useSelector } from "react-redux";
import type { QuizConfigState, QuizParams, QuizState } from "../model";
import { nextQuestion } from "@/features/quiz";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetQuizQuestionsQuery } from "@/features/quiz";
import { MainButton } from "@/shared/ui/main-button";
import "./QuizPage.css";

export function QuizPage() {
  const configData = useSelector(
    (state: { quizConfig: QuizConfigState }) => state.quizConfig
  );
  const quizProgress = useSelector(
    (state: { quiz: QuizState }) => state.quiz
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params: QuizParams = {
    specialization: configData.spec?.id || 11,
    complexity: configData.complexity?.id,
    skills:
      configData.skills.length > 0
        ? configData.skills.map((skill) => skill.id.toString())
        : undefined,
    qtyQuestions: configData.qtyQuestions,
  };

  const {
    data: serverResponse,
    isLoading,
    error,
  } = useGetQuizQuestionsQuery(params);

  useEffect(() => {
    if (quizProgress.isFinished) {
      navigate("/quiz/result");
    }
  }, [quizProgress.isFinished, navigate]);

  if (isLoading) return <div className="quiz__status">Загрузка...</div>;
  if (error)
    return (
      <div className="quiz__status error">Ошибка загрузки данных</div>
    );
  if (!serverResponse)
    return <div className="quiz__status">Нет вопросов</div>;

  const currentQuestion =
    serverResponse.questions[quizProgress.currentIndex];

  return (
    <div className="quiz__page-wrapper">
      <div className="quiz__card">
        <div className="quiz__progress-info">
          Вопрос {quizProgress.currentIndex + 1} из{" "}
          {serverResponse.questions.length}
        </div>

        <h2 className="quiz__question-title">{currentQuestion.title}</h2>

        {currentQuestion.description && (
          <p className="quiz__question-desc">
            {currentQuestion.description}
          </p>
        )}

        <div className="quiz__actions">
          <button
            className="quiz__btn quiz__btn--unknown"
            onClick={() =>
              dispatch(
                nextQuestion({
                  questionId: currentQuestion.id,
                  isKnown: "UNKNOWN",
                  length: serverResponse.questions.length,
                })
              )
            }
          >
            Не знаю
          </button>

          <MainButton
            text="Знаю"
            handleStart={() =>
              dispatch(
                nextQuestion({
                  questionId: currentQuestion.id,
                  isKnown: "KNOWN",
                  length: serverResponse.questions.length,
                })
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default QuizPage;