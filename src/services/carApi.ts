import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CarProps } from "@/types";

const baseUrl = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";
const headers = {
  "X-RapidAPI-Key": "969ca17d14mshe356efe914657c7p1da10bjsnfb2bcae5476f",
  "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
};

export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({
    getCars: builder.query<CarProps[], void>({
      query: () => {
        return {
          url: "?model=corolla",
          headers: headers,
        };
      },
    }),
  }),
});

export const { useGetCarsQuery } = carApi;
