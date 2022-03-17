import { IRootState } from "../../../entities/IRootState";

export const selectWeathersList = (state: IRootState) => {
    return state.WeatherUpdate.weather;
};

export const selectWeatherByDate = (state: IRootState) => {
    return state.WeatherUpdate.weatherByDate;
};

export const selectIsActivityIndicatorActive = (state: IRootState) => {
    return state.WeatherUpdate.isActivityIndicatorActive;
};