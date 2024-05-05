import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthContext, AuthProvider } from './context/authContext';
import ScreenMenu from './components/Menus/ScreenMenu';

const RootNavigation = () => {
  return (
    <AuthProvider>
        <ScreenMenu/>

    </AuthProvider>
  )
}

export default RootNavigation;

const styles = StyleSheet.create({})