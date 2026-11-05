import { baseApi } from "@/shared/api/baseApi";
import type { Skill } from "../model";

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<Skill[], void>({
      query: () => "skills",
      transformResponse: (response: { data: Skill[] }) => response.data,
    }),
  }),
  overrideExisting: false,
});

export const { useGetSkillsQuery } = skillsApi;
