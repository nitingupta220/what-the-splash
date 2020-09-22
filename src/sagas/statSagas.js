import { take, fork, put, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImageStats } from '../api';
import { loadImagesStat, setImageStat, setImageStatError } from '../actions';

function* handleStatsRequestSaga(id) {
    for (let index = 0; index < 3; index++) {
        try {
            yield put(loadImagesStat(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImageStat(id, res.downloads.total));
            return true;
        } catch (error) {}
    }
    yield put(setImageStatError(id));
}

function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);
        for (let index = 0; index < images.length; index++) {
            yield fork(handleStatsRequestSaga, images[index].id);
        }
    }
}

export default watchStatsRequest;
