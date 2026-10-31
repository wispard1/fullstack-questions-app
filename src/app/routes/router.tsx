/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { lazy, Suspense } from "react";
import { ErrorPage } from "@/pages/error/ui/ErrorPage";

const QuestionsPage = lazy(
  () => import("@/pages/questions/ui/QuestionsPage")
);
const QuizLobbyPage = lazy(
  () => import("@/pages/quiz-lobby/ui/QuizLobbyPage")
);
const QuestionDetailPage = lazy(
  () => import("@/pages/question-detail/ui/QuestionDetailPage")
);
const QuizPage = lazy(() => import("@/pages/quiz/ui/QuizPage"));
const ResultPage = lazy(() => import("@/pages/result/ui/ResultPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/questions" replace />,
      },
      {
        path: "/questions",
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <QuestionsPage />
          </Suspense>
        ),
      },
      {
        path: "questions/:id",
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <QuestionDetailPage />
          </Suspense>
        ),
      },
      {
        path: "quizLobby",
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <QuizLobbyPage />
          </Suspense>
        ),
      },
      {
        path: "quiz",
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <QuizPage />
          </Suspense>
        ),
      },
      {
        path: "quiz/result",
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <ResultPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
