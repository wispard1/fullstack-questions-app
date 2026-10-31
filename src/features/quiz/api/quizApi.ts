import type { QuizParams, QuizResponse } from "../model";
import { baseApi } from '@/app/store/baseApi'

export const quizApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuizQuestions: builder.query<QuizResponse, QuizParams>({
      query: ({ qtyQuestions, specialization, complexity, skills }) => ({
        url: `/interview-preparation/quizzes/mock/new`,
        params: {
          specialization,
          complexity,
          skills,
          limit: qtyQuestions,
        },
      }),
    }),
    submitQuizResult: builder.mutation({
      query: (body) => ({
        url: "/interview-preparation/quizzes",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetQuizQuestionsQuery,
  useSubmitQuizResultMutation,
} = quizApi;
