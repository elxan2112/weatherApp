import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        calendarContainer:{
            marginTop: 10
        },
        listContainer: {
            flex: 1,
            margin: 20
        }
    });
    return styles;
};
