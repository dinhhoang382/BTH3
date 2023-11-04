import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import auth from '@react-native-firebase/auth'
import { Image } from '@rneui/base'
import { Button, HelperText, TextInput } from 'react-native-paper'

const SignUpScreen = ({ navigation }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordR, SetPasswordR] = useState("")
    const [isPasswordVisible, setIsPasswordVisble] = useState(false)
    const [error, setError] = useState("")
    const SignUpEmailPassword = () => {
        if (password === passwordR) {
            auth().createUserWithEmailAndPassword(username, password)
                .then(() => {
                    console.log(`${username} has been created`)
                    navigation.navigate("LoginScreen")
                    setUsername("")
                    setPassword("")
                    SetPasswordR("")
                })
                .catch((e) => console.error(e))
        }
        else
            setError("Mật khẩu nhập lại không trùng khớp")
    }
    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'flex-start'
        }}>
            <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/577/577974.png" }}
                style={{ width: 200, height: 200, marginTop: 50 }}
            />
            <Text
                style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    marginTop: 20,
                    marginBottom: 20,
                }}
            >
                Đăng ký tài khoản
            </Text>
            <TextInput
                mode="outlined"
                label="Tài khoản"
                value={username}
                onChangeText={(username) => setUsername(username)}
                placeholder="Nhập tài khoản email"
                placeholderTextColor="#ccd"
                style={{ width: "90%", marginVertical: 10 }}
            />
            <HelperText type='info' visible={!username.includes("@gmail.com")} style={{alignSelf: 'flex-start', marginLeft: 10}}>
                Vui lòng sử dụng email để đăng ký
            </HelperText>
            <TextInput
                mode='outlined'
                label="Mật khẩu"
                value={password}
                onChangeText={(password) => setPassword(password)}
                style={{ width: '90%', marginBottom: 10 }}
                secureTextEntry={!isPasswordVisible}
                right={
                    <TextInput.Icon
                        icon={isPasswordVisible ? "eye-off" : "eye"}
                        onPress={() => setIsPasswordVisble(!isPasswordVisible)}
                    />
                }
            />
            <TextInput
                mode='outlined'
                label="Nhập lại mật khẩu"
                value={passwordR}
                onChangeText={(passwordR) => SetPasswordR(passwordR)}
                style={{ width: '90%', marginBottom: 10 }}
                secureTextEntry={!isPasswordVisible}
                right={
                    <TextInput.Icon
                        icon={isPasswordVisible ? "eye-off" : "eye"}
                        onPress={() => setIsPasswordVisble(!isPasswordVisible)}
                    />
                }
            />
            {/* Thông báo mật khẩu nhập lại không trùng khớp */}
            {error ? (
                <Text style={{ color: "red" }}>{error}</Text>)
                : null}
            <Button
                mode="elevated"
                onPress={SignUpEmailPassword}
            >Đăng ký tài khoản</Button>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Text style={{marginTop: 10}}>Bạn đã có tài khoản?</Text>
                <Button mode="text" onPress={() => navigation.navigate("LoginScreen")}>
                    Đăng Nhập
                </Button>
            </View>
        </View>
    )

}

export default SignUpScreen

const styles = StyleSheet.create({})