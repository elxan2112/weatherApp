import React, { FC, useMemo } from 'react';
import { Pressable, Text } from 'react-native';
import { IStackNavigation } from '../../../entities/IStackNavigation';
import { IWeather } from '../../../entities/IWeather';
import { getStyle } from './styles';

interface Props {
    item: IWeather;
    navigation: IStackNavigation
}

export const WeatherInfo: FC<Props> = ({ item, navigation }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <Pressable style={({ pressed }) => ({ ...styles.container, opacity: pressed ? 0.5 : 1 })} onPress={() => navigation.navigate('WeatherView', {item: item})}>
            <Text style={styles.weatherText}>
                {item?.applicable_date.toString().split("-").reverse().join("-")}
            </Text>
        </Pressable>
    )
};
