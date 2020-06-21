import { createAction } from '@reduxjs/toolkit';

export const newsApiCallRequested = createAction('newsApiCallRequested');
export const newsApiCallSuccess = createAction('newsApiCallSuccess');
export const newsApiCallFailed = createAction('newsApiCallFailed');
