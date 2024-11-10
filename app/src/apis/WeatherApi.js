import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://weatherapi-com.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', 'eaf347b102msh945248df4452547p132ab7jsnf7802c84f1a7');
      headers.set('x-rapidapi-host', 'weatherapi-com.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (location) => `/current.json?q=${location}`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
