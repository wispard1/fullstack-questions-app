import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.yeatwork.ru/" }),
  tagTypes: ['Questions', 'Skills', 'Specs'],
  endpoints: () => ({}),
});
