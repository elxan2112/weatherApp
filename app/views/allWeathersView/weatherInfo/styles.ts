import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            marginBottom: 2,
            backgroundColor: '#37a0a0',
        },
        weatherText: {
            padding: 5,
            fontSize: 16,
            color: '#FFF',
            lineHeight: 24,
        }
    });
    return styles;
};
