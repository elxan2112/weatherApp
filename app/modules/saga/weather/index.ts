import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaActionTypes } from '../SagaActionTypes';
import { AxiosRequester } from '../../../services/requester';
import { setWeather, setWeatherByDate } from '../../redux/weather/actions';
import { setNavigate } from '../../navigation/rootNavigation';

const requester = new AxiosRequester();

export function* workerCheckWeather() {
    try {
        const cityWoeid = yield call(getCityWoeid);
        const urlForWeather = `https://www.metaweather.com/api/location/${cityWoeid}`;
        const getWeatherResponse = yield call(requester.get, urlForWeather);
        yield put(setWeather(getWeatherResponse.data.consolidated_weather));
    } catch (error) {
        console.error(error);
    };
};

export function* workerCheckWeatherByDate({ payload }: { payload: moment.Moment }) {
    try {
        const cityWoeid = yield call(getCityWoeid);
        //@ts-ignore
        let date = new Date(payload);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const url = `https://www.metaweather.com/api/location/${cityWoeid}/${year}/${month}/${day}`;
        const response = yield call(requester.get, url);
        if(response.data){
            yield put(setWeatherByDate(response.data[0]));
            setNavigate('WeatherView', {item: null})
        }
    } catch (error) {
        console.error(error);
    };
};

function* getCityWoeid() {
    const url = 'https://www.metaweather.com/api/location/search/';
    const params = { query: 'london' };
    const response = yield call(requester.get, url, params);
    return response.data[0].woeid;
}

export function* watchUserPost() {
    yield takeEvery(SagaActionTypes.CHECK_WEATHER, workerCheckWeather);
    yield takeEvery(SagaActionTypes.CHECK_WEATHER_BY_DATE, workerCheckWeatherByDate);
};