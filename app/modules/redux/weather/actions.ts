import { ReduxActionTypes } from "../ReduxActionTypes";

export const setWeather = (payload: any) => {
    return { type: ReduxActionTypes.SET_WEATHER, payload };
};

export const setWeatherByDate = (payload: any) => {
    return { type: ReduxActionTypes.SET_WEATHER_BY_DATE, payload };
}
