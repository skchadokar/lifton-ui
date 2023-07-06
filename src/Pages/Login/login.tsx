import React, { useState } from 'react';
import {
    ActivityIndicator,
    Platform,
    StyleSheet,
    Text,
    // TextInput,
    ToastAndroid,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthenticateMutation } from '../../services/auth';
import { login } from '../../feature/authSlice';
import { RootState } from '../../app/store';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Button, TextInput } from 'react-native-paper';

function Login(): JSX.Element {
    const dispatch = useDispatch();
    const [state, setState] = useState({ username: '', password: '' });
    const [Authentication, { isLoading }] = useAuthenticateMutation();

    const onSubmit = () => {
        // Authentication(state).unwrap().then(resp => {
        //     const userData = resp.response.body;
        const userData = {
            userName: "Mahesh",
        }
        Toast.show({
            type: "success",
            position: "bottom",
            text1: `Welcome ${userData.userName}`
        })
        dispatch(login(userData))
        // }).catch(error => {
        //     console.log('error ', error);
        //     Toast.show({
        //         type: "error",
        //         position: "bottom",
        //         text1: error.error
        //     })
        // })
    }

    return (
        <View style={styles.viewContainer} >
            <Text style={styles.loginText}>Login</Text>
            <TextInput label="User Name" mode='outlined' value={state.username} onChangeText={(text) => setState(state => ({ ...state, username: text }))} />
            <TextInput label="Password" mode='outlined' secureTextEntry={true} value={state.password} onChangeText={(text) => setState(state => ({ ...state, password: text }))} />
            <View style={styles.buttonView}>
                {isLoading ? <ActivityIndicator size={"large"} />
                    : <Button mode="contained" onPress={onSubmit} >Login</Button>}
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
        padding: 30,
        marginTop: 50
    },
    buttonView: {
        marginTop: 15
    }
});

export default Login;
