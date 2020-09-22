import { IMAGES, STATS } from '../constants';

const loadImages = () => ({
    type: IMAGES.LOAD,
});

const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

const loadImagesStat = id => ({
    type: STATS.LOAD,
    id,
});

const setImageStat = (id, downloads) => ({
    type: STATS.LOAD_SUCCESS,
    id,
    downloads,
});

const setImageStatError = id => ({
    type: STATS.LOAD_FAIL,
    id,
});

export {
    loadImages,
    setImages,
    setError,
    loadImagesStat,
    setImageStat,
    setImageStatError,
};
