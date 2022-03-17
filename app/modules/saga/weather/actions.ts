import { SagaActionTypes } from "../SagaActionTypes";

export const checkWeather = () => {
    return { type: SagaActionTypes.CHECK_WEATHER };
};

export const getWeatherByDate = (data: moment.Moment) => {
    return { type: SagaActionTypes.CHECK_WEATHER_BY_DATE, payload: data };
};