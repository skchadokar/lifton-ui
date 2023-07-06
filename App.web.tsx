import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { View, StyleSheet } from 'react-native';
import Login from './src/Pages/Login/login.web';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from './src/app/store';
import { ToastProvider } from 'react-toast-notifications';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Users from './src/Pages/Users/Users.web';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ChakraProvider } from '@chakra-ui/react'


const App = () => {
    let persistor = persistStore(store);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ChakraProvider>
                    <ToastProvider>
                        <View style={styles.container}>
                            <Router>
                                <Routers />
                            </Router>
                        </View>
                    </ToastProvider>
                </ChakraProvider>
            </PersistGate>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebeb',
        paddingTop: 40,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#ccc',
        padding: 5,
        marginVertical: 20,
        alignSelf: 'flex-start',
    },
    title: {
        fontSize: 40,
    },
});

export default App;

const Routers = () => {
    const { isLogin, userData } = useSelector((state: RootState) => state.auth);

    return (
        <Routes>
            {isLogin ? <>
                <Route path='/' element={<Users />} />
            </> : <>
                <Route path='/' element={<Login />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </>}
        </Routes>
    )
}