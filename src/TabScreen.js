import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';

const TabScreen = ({ navigation }) => {
    const signOut = () => {
        auth()
            .signOut()
            .then(() => {
                console.log('User signed out!')
                navigation.navigate("LoginScreen")
            })
            .catch(e => console.error(e))
    }
    const [username, setUsername] = useState(null);
    useEffect(() => {
        const unsubcribe = auth().onAuthStateChanged(async (user) => {
            if (user) {
                await setUsername(user.displayName);
            } else setUsername = null;
        });
        return () => unsubcribe;
    }, []);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> Hello {username}</Text>
            <Button
                onPress={signOut}
            >Đăng xuất</Button>
        </View>
    )
}

export default TabScreen

const styles = StyleSheet.create({})