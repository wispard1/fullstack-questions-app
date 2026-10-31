import { baseApi } from "@/app/store/baseApi";
import type { Spec } from "../model";

export const specsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecs: builder.query<Spec[], void>({
      query: () => "specializations",
      transformResponse: (response: { data: Spec[] }) => response.data,
    }),
  }),
  overrideExisting: false,
});

export const { useGetSpecsQuery } = specsApi;
