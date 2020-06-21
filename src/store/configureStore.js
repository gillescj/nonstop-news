import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import newsApi from './middleware/newsApi';
import rootReducer from './rootReducer';

export default () => {
    return configureStore({
        reducer: rootReducer,
        middleware: [...getDefaultMiddleware(), newsApi],
    });
};
