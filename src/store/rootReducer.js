import { combineReducers } from 'redux';
import articlesReducer from './articles';
import settingsReducer from './settings';

export default combineReducers({
    articles: articlesReducer,
    settings: settingsReducer,
});
