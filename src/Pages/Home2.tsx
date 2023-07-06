import React from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { logout } from '../feature/authSlice';

function Home2(): JSX.Element {
    const dispatch = useDispatch();
    const { isLogin, userData } = useSelector((state: RootState) => state.auth);

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <View>
            <Text>Welcome to {userData?.userName}</Text>
            <Button title="Logout" onPress={onLogout} />

        </View>
    )
}

export default Home2;