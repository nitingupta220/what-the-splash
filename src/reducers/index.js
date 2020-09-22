import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import imageReducer from './imageReducer';
import pageReducer from './pageReducer';
import statReducer from './statsReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imageReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imageStats: statReducer,
});

export default rootReducer;
