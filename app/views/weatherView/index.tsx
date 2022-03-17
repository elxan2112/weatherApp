import React, { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { selectWeatherByDate } from '../../modules/redux/weather';
import { IStackNavigation } from '../../entities/IStackNavigation';
import { WeatherType } from '../../entities/WeatherType';
import { CloudyIcon } from '../../assets/svg/cloudyIcon';
import { shallowEqual, useSelector } from 'react-redux';
import { RainIcon } from '../../assets/svg/rainIcon';
import { SnowIcon } from '../../assets/svg/snowIcon';
import { SunIcon } from '../../assets/svg/sunIcon';
import { IRoute } from '../../entities/IRoute';
import { WeatherViewHeader } from './header';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
    route: IRoute;
}

export const WeatherView: FC<Props> = ({ navigation, route }) => {
    const { item } = route?.params;
    let data: WeatherType;
    if (item) data = item;
    else data = useSelector(selectWeatherByDate, shallowEqual) as WeatherType
    const styles = useMemo(() => getStyle(data.the_temp, data.min_temp, data.max_temp), [data.the_temp, data.min_temp, data.max_temp]);

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
                    <Text style={styles.tempText}>
                        {Math.floor(data.the_temp)}°C
                    </Text>
                </Text>
                <Text style={styles.temperatureText}>Minimum temperature:
                    <Text style={styles.minTempText}>
                        {Math.floor(data.min_temp)}°C
                    </Text>
                </Text>
                <Text style={styles.temperatureText}>Maximum temperature:
                    <Text style={styles.maxTempText}>
                        {Math.floor(data.max_temp)}°C
                    </Text>
                </Text>
            </View>
        </View>
    )
};
