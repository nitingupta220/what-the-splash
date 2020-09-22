import { all } from 'redux-saga/effects';
import imagesSaga from './imagesSaga';
import statSagas from './statSagas';

function* rootSaga() {
    yield all([imagesSaga(), statSagas()]);
}

export default rootSaga;
