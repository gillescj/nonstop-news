import { createSlice } from '@reduxjs/toolkit';
import { newsApiCallRequested } from './newsApi';

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        list: [],
        loading: false,
    },
    reducers: {
        articlesRequested: (state, action) => {
            state.loading = true;
        },

        articlesRequestFailed: (state, action) => {
            state.loading = false;
        },

        articlesRecieved: (state, action) => {
            state.list = action.payload;
            state.loading = false;
        },

        getArticles: (state, action) => {
            state.list = action.payload;
        },
    },
});

export const {
    articlesRecieved,
    getArticles,
    articlesRequested,
    articlesRequestFailed,
} = articlesSlice.actions;
export default articlesSlice.reducer;

// Action Creators
export const loadArticles = () =>
    newsApiCallRequested({
        url: '/top-headlines',
        params: {
            category: 'general',
            country: 'ca',
            pageSize: 32,
        },
        onStart: articlesRequested.type,
        onSuccess: articlesSlice.actions.articlesRecieved.type,
        onError: articlesRequestFailed.type,
    });
