import { StyleSheet } from 'react-native';

export const getStyle = () => {
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
        }
    });
    return styles;
};
