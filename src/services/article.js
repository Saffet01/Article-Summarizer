import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '244a584a3bmsh6b3c1afc0e97426p1a8856jsnb395758f3a1a',);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=4`
            // parameter may includes some special characters so need to use encodeURIComponent Saffet
        }),
    }),
});

export const {useLazyGetSummaryQuery} = articleApi;