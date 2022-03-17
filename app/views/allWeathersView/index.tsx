import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { selectIsActivityIndicatorActive, selectWeathersList } from '../../modules/redux/weather/selectors';
import { checkWeather, getWeatherByDate } from '../../modules/saga/weather/actions';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { IStackNavigation } from '../../entities/IStackNavigation';
import CalendarPicker from 'react-native-calendar-picker';
import { WeatherInfo } from './weatherInfo';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
}

export const AllWeathersView: FC<Props> = ({ navigation }) => {
    const styles = useMemo(() => getStyle(), []);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkWeather())
    }, [])
    const weathersList = useSelector(selectWeathersList, shallowEqual) as any;
    const isActivityIndicatorActive = useSelector(selectIsActivityIndicatorActive, shallowEqual) as any;

    const renderItem = useCallback(({ item }) => (
        <WeatherInfo {...{ item, navigation }} />
    ), [weathersList]);

    return (
        <View style={styles.container}>
            {isActivityIndicatorActive
                ? <View style={styles.indicatorContainer}><ActivityIndicator size={'large'} color={'#FFF'}/></View>
                : <></>}
            <View style={styles.calendarContainer}>
                <CalendarPicker
                    minDate={new Date()}
                    onDateChange={(date) => dispatch(getWeatherByDate(date))}
                />
            </View>
            <FlatList
                data={weathersList}
                style={styles.listContainer}
                renderItem={renderItem}
            />
        </View>
    )
};
