import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../feature/counterSlice';
import authReducer from '../feature/authSlice';
import { authApi } from '../services/auth';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,

    [authApi.reducerPath]: authApi.reducer
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(
        authApi.middleware
    )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch