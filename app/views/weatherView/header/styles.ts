import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        iconView: {
            width: 40,
            height: 40
        },
        headerName: {
            fontSize: 18,
            lineHeight: 22,
            color: 'black',
        }
    });
    return styles;
};
