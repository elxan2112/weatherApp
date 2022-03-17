import { all, spawn } from 'redux-saga/effects';
import { watchUserPost } from './weather';

export function* rootSaga() {
    try {
        yield all([
            spawn(watchUserPost),
        ]);
    } catch (error) {
        console.warn('rootSaga: ', error);
    };
};
