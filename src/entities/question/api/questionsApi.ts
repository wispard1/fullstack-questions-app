import { baseApi } from "@/app/store/baseApi";
import type { Question, QuestionDetail } from "../model/types";

export interface QuestionsResponse {
  total: number;
  page: number;
  limit: number;
  data: Question[];
}

export interface GetQuestionsParams {
  page?: number;
  specializationId?: string;
  skills?: string[];
  complexity?: string;
  rate?: string;
  title?: string;
}

type RawKeywordResponse = Omit<QuestionsResponse, "data"> & {
  data: Question[] | string[];
};

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<
      QuestionsResponse,
      GetQuestionsParams
    >({
      query: (params) => ({
        url: "questions/public-questions",
        params: {
          page: params.page || 1,
          limit: 10,
          title: params.title || undefined,
          specializationId: params.specializationId || undefined,
          skills: params.skills?.length
            ? params.skills.join(",")
            : undefined,
          complexity: params.complexity || undefined,
          rate: params.rate || undefined,
        },
      }),
      providesTags: ["Questions"],
    }),
    findQuestionsByKeyword: builder.query<
      QuestionsResponse,
      GetQuestionsParams
    >({
      query: (params) => ({
        url: "questions/filter/keywords",
        params: {
          page: params.page || 1,
          limit: 10,
          title: params.title || undefined,
          specializationId: params.specializationId || undefined,
          complexity: params.complexity || undefined,
          rate: params.rate || undefined,
        },
      }),
      transformResponse: (
        response: RawKeywordResponse
      ): QuestionsResponse => {
        if (
          response.data.length > 0 &&
          typeof response.data[0] === "string"
        ) {
          return {
            ...response,
            data: (response.data as string[]).map((str, index) => ({
              id: `keyword-${index}`,
              title: str,
            })),
          };
        }
        return response as QuestionsResponse;
      },
      providesTags: ["Questions"],
    }),

    fetchQuestionById: builder.query<QuestionDetail, number | string>({
      query: (id) => `questions/public-questions/${id}`,
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
