import { ReduxActionTypes } from "../ReduxActionTypes";
import { IWeather } from "../../../entities/IWeather";

export interface IWeatherUpdate {
    weather: Array<IWeather>
    weatherByDate: IWeather;
    isActivityIndicatorActive: boolean;
};

const initState: IWeatherUpdate = {
    weather: [],
    weatherByDate: {} as IWeather,
    isActivityIndicatorActive: true,
};

export const WeatherUpdate = (state: IWeatherUpdate = initState, action: { type: string, payload: any }): IWeatherUpdate => {
    const { type, payload } = action;
    switch (type) {
        case ReduxActionTypes.SET_WEATHER:
            return { ...state, weather: payload }
        case ReduxActionTypes.SET_WEATHER_BY_DATE:
            return { ...state, weatherByDate: payload }
        case ReduxActionTypes.SET_ACTIVITY_INDICATOR:
            return { ...state, isActivityIndicatorActive: payload }
        default:
            return state;
    };
};
