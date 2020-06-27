import axios from 'axios';
import * as actions from '../newsApi';

const newsApi = ({ dispatch }) => (next) => async (action) => {
    if (action.type !== actions.newsApiCallRequested.type) return next(action);

    const { url, method, params, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
        const response = await axios.request({
            baseURL: `${process.env.REACT_APP_CORS_PROXY}https://api.currentsapi.services/v1`,
            url,
            method,
            params: {
                ...params,
                apiKey: process.env.REACT_APP_API_KEY,
            },
        });

        dispatch(actions.newsApiCallSuccess(response.data.news));
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data.news });
    } catch (error) {
        dispatch(actions.newsApiCallFailed(error.message));
        if (onError) dispatch({ type: onError, payload: error.message });
    }
};

export default newsApi;
