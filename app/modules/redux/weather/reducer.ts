import { ReduxActionTypes } from "../";
import { WeatherType } from "../../../entities/WeatherType";

export type WeatherUpdateType = {
    weather: Array<WeatherType>
    weatherByDate: WeatherType;
    isActivityIndicatorActive: boolean;
};

const initState: WeatherUpdateType = {
    weather: [],
    weatherByDate: {} as WeatherType,
    isActivityIndicatorActive: true,
};

export const WeatherUpdate = (state: WeatherUpdateType = initState, action: { type: string, payload: any }): WeatherUpdateType => {
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
