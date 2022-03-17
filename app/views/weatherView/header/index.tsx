import React, { FC, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { IStackNavigation } from '../../../entities/IStackNavigation';
import { BackIcon } from '../../../assets/svg/backIcon';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
    date: string;
}

export const WeatherViewHeader: FC<Props> = ({ navigation,date }) => {
    const styles = useMemo(() => getStyle(), []);
    
    return (
        <View style={styles.container}>
            <Pressable style={styles.iconView} onPress={navigation.goBack}>
                <BackIcon />
            </Pressable>
            <Text style={styles.headerName}>
                {date}
            </Text>
            <View style={styles.iconView}/>
        </View>
    )
};
