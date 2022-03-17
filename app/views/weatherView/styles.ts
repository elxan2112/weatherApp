import { StyleSheet } from 'react-native';

export const getStyle = (temp, minTemp, maxTemp) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 10,
            marginHorizontal: 15,
        },
        weatherStateContainer: {
            marginVertical: 7,
            alignItems: 'center',
            flexDirection: 'row',
        },
        weatherState: {
            fontSize: 20,
            color: "#000",
            lineHeight: 24,
        },
        iconContainer: {
            marginLeft: 10
        },
        temperatureText: {
            fontSize: 20,
            color: "#000",
            lineHeight: 24,
            marginBottom: 5,
        },
        tempText: {
            fontSize: 20,
            lineHeight: 24,
            marginBottom: 5,
            color: temp >= 0 ? '#f70000' : '#85c9e8'
        },
        minTempText: {
            fontSize: 20,
            lineHeight: 24,
            marginBottom: 5,
            color: minTemp >= 0 ? '#f70000' : '#85c9e8'
        },
        maxTempText: {
            fontSize: 20,
            lineHeight: 24,
            marginBottom: 5,
            color: maxTemp >= 0 ? '#f70000' : '#85c9e8'
        },
    });
    return styles;
};
