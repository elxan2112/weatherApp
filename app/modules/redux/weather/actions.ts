import { ReduxActionTypes } from "../";

export const setWeather = (payload: any) => {
    return { type: ReduxActionTypes.SET_WEATHER, payload };
};

export const setWeatherByDate = (payload: any) => {
    return { type: ReduxActionTypes.SET_WEATHER_BY_DATE, payload };
}

export const setActivityIndicator = (payload: boolean) => {
    return { type: ReduxActionTypes.SET_ACTIVITY_INDICATOR, payload };
}
