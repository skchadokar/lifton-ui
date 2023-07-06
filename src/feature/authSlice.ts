import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    userData: any,
    isLogin: boolean
}

const initialState: CounterState = {
    userData: {},
    isLogin: false
}

export const authSlice = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogin = true;
            state.userData = action.payload
        },
        logout: (state) => {
            state.isLogin = false;
            state.userData = {}
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer