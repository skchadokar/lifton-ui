/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Fragment, useEffect, useState } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/Pages/Login/login';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from './src/app/store';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import Home from './src/Pages/Home';
import Home2 from './src/Pages/Home2';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const Stack = createNativeStackNavigator();

function App() {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <Routers />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  height: {
    marginTop: Platform.OS === 'ios' ? 30 : 10
  }
});

export default App;

function Routers() {
  const { isLogin } = useSelector((state: RootState) => state.auth);

  const [routename, setRoute] = useState("Login")
  console.log('LOOO ', isLogin)
  return (
    <Fragment>
      <NavigationContainer>
        {/* <Login /> */}
        {isLogin ?
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            {/* <View style={styles.height}> */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Home2" component={Home2} />
            {/* </View> */}
          </Stack.Navigator>
          :
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        }
      </NavigationContainer>
      <Toast />
    </Fragment>
  )
}
