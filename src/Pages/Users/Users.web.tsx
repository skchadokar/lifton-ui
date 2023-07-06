import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { logout } from '../../feature/authSlice';
import { Button, Container, Text } from '@chakra-ui/react';

export default function Users() {
    const dispatch = useDispatch();
    const { isLogin, userData } = useSelector((state: RootState) => state.auth);
    const LogoutHandle = () => {
        dispatch(logout());
    }
    return (
        <Container>
            <Text fontSize={30}>Welcome {userData.userName}</Text>
            {/* <button onClick={() => LogoutHandle()}>Log out</button> */}
            <Button onClick={() => LogoutHandle()} colorScheme='teal'>
                Log Out
            </Button>
        </Container>
    )
}
