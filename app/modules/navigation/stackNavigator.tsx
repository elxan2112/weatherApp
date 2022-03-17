import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AllWeathersView } from '../../views/allWeathersView';
import { WeatherView } from '../../views/weatherView';

const Stack = createStackNavigator();

export const StackNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName='AllWeathersView'>
            <Stack.Screen name='AllWeathersView' component={AllWeathersView} options={{ headerShown: false }} />
            <Stack.Screen name='WeatherView' component={WeatherView} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
