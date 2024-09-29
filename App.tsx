/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigation from './navigation/RootNavigation';
import {AppState} from 'react-native';
import {checkToken} from './api/user';

const App = () => {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/active|background/) &&
          nextAppState === 'active'
        ) {
          console.log('You have come back into the App');
          await checkToken();
          // We are coming from background to foreground
        }
        await checkToken();
        appState.current = nextAppState;
      },
    );
    checkToken();
    console.log('Application has rendered');

    // clean up
    return () => subscription.remove();
  }, [appState]);
  console.log('🚀 ~ App ~ appState:', appState);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
