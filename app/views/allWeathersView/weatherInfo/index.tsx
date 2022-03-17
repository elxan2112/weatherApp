import React, { FC, useMemo } from 'react';
import { Pressable, Text } from 'react-native';
import { IStackNavigation } from '../../../entities/IStackNavigation';
import { WeatherType } from '../../../entities/WeatherType';
import { getStyle } from './styles';

interface Props {
    item: WeatherType;
    navigation: IStackNavigation
}

export const WeatherInfo: FC<Props> = ({ item, navigation }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('WeatherView', {item: item})}>
            <Text style={styles.weatherText}>
                {item?.applicable_date.toString().split("-").reverse().join("-")}
            </Text>
        </Pressable>
    )
};
