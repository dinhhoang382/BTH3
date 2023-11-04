import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth'; // Thêm dòng import này

import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '424419857544-8emtilrsspabhgjphv5nr7cpa3scafh8.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const Login = ({ navigation }) => {
  const [text, setText] = useState(''); // Gán giá trị cho biến text
  const img =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png';

  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={{
          uri: img,
        }}
      />
      <View>
        <TextInput
          style={styles.TextInput}
          label="Email"
          value={text} // Gán giá trị cho TextInput
          underlineColor="transparent"
          onChangeText={(text) => setText(text)}
        />
      </View>
      <View>
        <TextInput
          style={styles.TextInput}
          label="Password"
          underlineColor="transparent"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            backgroundColor: '#D6E5FA',
            width: 350,
            alignSelf: 'center',
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#333' }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
        <Button
          title="Google Sign-In"
          onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
        />
        <TouchableOpacity
          onPress={() => {}}
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginRight: 10,
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 17, fontStyle: 'italic', fontWeight: 'bold', color: '#0779E4' }}>
            Đăng ký tài khoản
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  TextInput: {
    width: 350,
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 10,
    backgroundColor: 'transparent',
    borderColor: '#0779E4',
    borderWidth: 1,
  },
  Logo: {
    width: 200,
    height: 66,
    marginBottom: 15,
    alignSelf: 'center',
  },
});

export default Login;
