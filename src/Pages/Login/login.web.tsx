import React, { useState } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthenticateMutation } from '../../services/auth';
import { login } from '../../feature/authSlice';
import { RootState } from '../../app/store';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useToasts } from 'react-toast-notifications';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '@chakra-ui/react';

function Login(): JSX.Element {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const [state, setState] = useState({ username: '', password: '' });
    const [Authentication, { isLoading }] = useAuthenticateMutation();
    const { addToast } = useToasts();

    const onSubmit = () => {
        // Authentication(state).unwrap().then(resp => {
        //     const userData = resp.response.body;
        //     // Toast.show({
        //     //     type: "success",
        //     //     position: "bottom",
        //     //     text1: `Welcome ${userData.userName}`
        //     // })
        //     dispatch(login(userData))
        // }).catch(error => {
        //     console.log('error ', error);
        //     // Toast.show({
        //     //     type: "error",
        //     //     position: "bottom",
        //     //     text1: error.error
        //     // })
        // })
        const userData = {
            userName: "Mahesh",
        }
        dispatch(login(userData))
        addToast(`Welcome ${userData.userName}`, { appearance: "success", autoDismiss: true });
        // navigation('/dashboard');
    }

    return (
        <View style={styles.viewContainer} >
            <Text style={styles.loginText}>Login</Text>
            <Text style={styles.inputLabel}>Username</Text>
            <Input style={styles.input} value={state.username} onChange={(e: any) => setState(state => ({ ...state, username: e.target.value }))} />
            <Text style={styles.inputLabel}>Password</Text>
            <Input style={styles.input} type='password' value={state.password} onChange={(e: any) => setState(state => ({ ...state, password: e.target.value }))} />
            <View style={styles.buttonView}>
                {isLoading ? <ActivityIndicator size={"large"} />
                    : <Button title={`Login`} colorScheme='teal' onClick={onSubmit} >Login</Button>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginText: {
        fontSize: 32,
        marginBottom: 5,
        textAlign: 'center',
        textTransform: "uppercase",
        color: "#000"
    },
    input: {
        borderWidth: 1,
        padding: 10
    },
    inputLabel: {
        fontSize: 15,
        color: "#000",
        marginTop: 5
    },
    viewContainer: {
        padding: 100,
        width: "50%",
        margin: "auto",
        marginTop: 100
    },
    buttonView: {
        marginTop: 15
    }
});

export default Login;
