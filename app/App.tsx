import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { RootNavigation } from './modules/navigation/rootNavigation';
import { PersistGate } from 'redux-persist/integration/react';
import { persisStore, store } from './modules/redux/store';
import { Provider } from 'react-redux';

const App: FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persisStore}>
                    <RootNavigation />
                </PersistGate>
            </Provider>
        </SafeAreaView>
    )
}

export default App;