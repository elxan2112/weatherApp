import React, { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { selectWeatherByDate } from '../../modules/redux/weather/selectors';
import { IStackNavigation } from '../../entities/IStackNavigation';
import { shallowEqual, useSelector } from 'react-redux';
import { CloudyIcon } from '../../assets/svg/cloudyIcon';
import { RainIcon } from '../../assets/svg/rainIcon';
import { SnowIcon } from '../../assets/svg/snowIcon';
import { IWeather } from '../../entities/IWeather';
import { SunIcon } from '../../assets/svg/sunIcon';
import { IRoute } from '../../entities/IRoute';
import { WeatherViewHeader } from './header';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
    route: IRoute;
}

export const WeatherView: FC<Props> = ({ navigation, route }) => {
    const styles = useMemo(() => getStyle(), []);
    const { item } = route?.params;
    let data: IWeather;
    if (item) data = item;
    else data = useSelector(selectWeatherByDate, shallowEqual) as any

    const getIcon = (weatherState: string) => {
        switch (weatherState) {
            case 'Cloud':
            case 'Light Cloud':
            case 'Heavy Cloud':
                return <CloudyIcon />;
            case 'Sun':
            case 'Clear':
                return <SunIcon />;
            case 'Rain':
            case 'Showers':
            case 'Light Rain':
            case 'Heavy Rain':
                return <RainIcon />;
            case 'Snow':
                return <SnowIcon />;
            default:
                return <SunIcon />;
        }
    }

    return (
        <View style={styles.container}>
            <WeatherViewHeader {...{ navigation }} date={data.applicable_date} />
            <View>
                <View style={styles.weatherStateContainer}>
                    <Text style={styles.weatherState}>{data.weather_state_name}</Text>
                    <View style={styles.iconContainer}>
                        {getIcon(data.weather_state_name)}
                    </View>
                </View>
                <Text style={styles.temperatureText}>Temperature:
                    <Text style={{ ...styles.temperatureText, color: data.the_temp >= 0 ? '#f70000' : '#85c9e8' }}>
                        {Math.floor(data.the_temp)}°C
                    </Text>
                </Text>
                <Text style={styles.temperatureText}>Minimum temperature:
                    <Text style={{ ...styles.temperatureText, color: data.min_temp >= 0 ? '#f70000' : '#85c9e8' }}>
                        {Math.floor(data.min_temp)}°C
                    </Text>
                </Text>
                <Text style={styles.temperatureText}>Maximum temperature:
                    <Text style={{ ...styles.temperatureText, color: data.max_temp >= 0 ? '#f70000' : '#85c9e8' }}>
                        {Math.floor(data.max_temp)}°C
                    </Text>
                </Text>
            </View>
        </View>
    )
};
