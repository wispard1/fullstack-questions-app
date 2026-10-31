import { baseApi } from "../../../app/store/baseApi";
import type { Question, QuestionDetail } from "../model/types";

const normalizeFn = (response: { data: Question[] }) => {
  return response.data.map((item: string | Question) => {
    if (typeof item === "string") {
      return { id: item, title: item };
    }
    return item;
  });
};

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicQuestions: builder.query({
      query: (page) => `questions/public-questions?page=${page}`,
      transformResponse: normalizeFn,
      providesTags: ["Questions"],
    }),
    fetchQuestionById: builder.query<QuestionDetail, number>({
      query: (id) => `questions/public-questions/${id}`,
      // transformResponse: normalizeFn,
      providesTags: ["Questions"],
    }),
    findQuestionsByKeyword: builder.query({
      query: (params) => ({
        url: "questions/filter/keywords",
        params: {
          page: params.page,
          title: params.title,
        },
      }),
      transformResponse: normalizeFn,
      providesTags: ["Questions"],
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetPublicQuestionsQuery,
  useFindQuestionsByKeywordQuery,
  useFetchQuestionByIdQuery,
} = questionsApi;
