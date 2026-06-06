import { apiSlice } from "./apiSlice";
import { PRODUCTS_URL } from "../constants";

const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => PRODUCTS_URL,
            keepUnusedDataFor: 5,
        }),

        getProductById: builder.query({
            query: (productId) => `${PRODUCTS_URL}/${productId}`,
            keepUnusedDataFor: 5,
        }),
    })
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApiSlice;