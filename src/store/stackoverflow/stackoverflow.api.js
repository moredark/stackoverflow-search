import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const stackApi = createApi({
  reducerPath: "stackoverflow/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.stackexchange.com/",
  }),
  endpoints: (build) => ({
    searchAnswers: build.query({
      query: ({ search, page, sortParams }) => ({
        url: "search",
        params: {
          intitle: search,
          page,
          order: sortParams.order,
          sort: sortParams.sort,
          site: "stackoverflow",
          pagesize: 10,
        },
      }),
    }),
    getQuestionInfo: build.query({
      query: (questionId) => ({
        url: `questions/${questionId}`,
        params: {
          site: "stackoverflow",
          filter: "5147LhBYl",
        },
      }),
      transformResponse: (response) => {
        return response.items[0];
      },
    }),
    getAnswers: build.query({
      query: (questionId) => ({
        url: `questions/${questionId}/answers/`,
        params: {
          site: "stackoverflow",
          filter: "!nNPvSNdWme",
          sort: "votes",
        },
      }),
      transformResponse: (response) => {
        return response.items;
      },
    }),
  }),
});

export const { useSearchAnswersQuery, useGetQuestionInfoQuery, useGetAnswersQuery } = stackApi;
