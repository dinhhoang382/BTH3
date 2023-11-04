import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, HelperText, Modal, TextInput } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import auth from '@react-native-firebase/auth'

const ForgotPasswordScreen = ({navigation}) => {
  const success = `Success: Password reset @{email} sent`
  const [email, setEmail] = useState("")
  const [showModal, setShowModal] = useState(false)

  const handleResetButton = () => {
    auth().sendPasswordResetEmail(email)
      .then(() => {
        console.log(success);
        setShowModal(true)
      })
      .catch((e) => console.error(e));

  }
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <Text style={styles.lables}>Đặt lại mật khẩu</Text>
        <TextInput
          mode='outlined'
          label="Nhập email của bạn"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <HelperText type='error' visible={email.trim() == ''}>
          Please input your email!!
        </HelperText>
        <HelperText type='error' visible={!email.includes('@gmail')}>
          Email address is invalid!!
        </HelperText>
        <Button
          mode='contained-tonal'
          onPress={handleResetButton}
          style={{ width: '90%', alignSelf: 'center' }}
        >Lấy lại mật khẩu</Button>
        <Modal
          visible={showModal}
          contentContainerStyle={styles.containerStyle}>
          <View style={styles.modalContainer}>
            <Text style={styles.modaltext}>
              Tài khoản {email} đã được đặt lại
            </Text>
            <Text style={styles.modaltext}>
              Vui lòng kiểm tra mật khẩu trong Email
            </Text>
            <Button
              mode='text'
              style={{ margin: 10, }}
              onPress={() => setShowModal(false)}>OK</Button>
          </View>
        </Modal>
        <TouchableOpacity
          style={{ marginVertical: 10, alignSelf: 'center' }}
          onPress={()=>navigation.navigate("LoginScreen")}>
          <Text style={{ color: '#999', }}>Go back to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
  lables: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },
  containerStyle: {
    backgroundColor: '#fff',
    margin: 30,
    borderRadius: 10,
  },
  modalContainer: {
    width: '100%',
    height: 150,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b6',
    borderRadius: 10
  },
  modaltext: {
    fontSize: 15,
    color: '#fff'
  }
})