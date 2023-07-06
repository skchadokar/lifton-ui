import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../feature/authSlice';

export default function LogoutHandle() {
    const dispatch = useDispatch();
    dispatch(logout());
    return null
}
