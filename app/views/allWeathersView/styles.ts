import { Dimensions, StyleSheet } from 'react-native';

export const getStyle = () => {
    const {width, height} = Dimensions.get('window')
    
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
        },
        indicatorContainer: {
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            top: height / 2,
            position: 'absolute',
        }
    });
    return styles;
};
