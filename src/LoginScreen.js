import { Image } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Icon, TextInput } from "react-native-paper";
import auth from "@react-native-firebase/auth";
import { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import RNTouchableOpacity from '../demo/TouchableOpacity'
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisble] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const signinEmailnPassword = () => {
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        console.log("User signed in successfully!");
        navigation.navigate("HomeScreen");
      })
      .catch((e) => {
        console.error(e);
        setErrorMessage("Email hoặc mật khẩu không chính xác");
        setPassword("");
      });
  };

  // --signin with Google--
  GoogleSignin.configure({
    webClientId:
      "424419857544-8emtilrsspabhgjphv5nr7cpa3scafh8.apps.googleusercontent.com",

  });
  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    }
    catch (error) {
      console.error("Google Sign in error", error)
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/577/577974.png",
        }}
        style={{ width: 200, height: 200, marginTop: 80 }}
      />
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        Chào mừng!
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
      <TextInput
        mode="outlined"
        label="Mật khẩu"
        value={password}
        onChangeText={(password) => setPassword(password)}
        style={{ width: "90%", marginBottom: 10 }}
        secureTextEntry={!isPasswordVisible}
        right={
          <TextInput.Icon
            icon={isPasswordVisible ? "eye-off" : "eye"}
            onPress={() => setIsPasswordVisble(!isPasswordVisible)}
          />
        }
      />
      {errorMessage && (
        <Text style={{ color: "red", marginVertical: 5 }}>{errorMessage}</Text>
      )}
      {/* --------------Signin Email--------------------- */}
      <Button
        onPress={signinEmailnPassword}
        mode="contained"
        style={{
          height: 45,
          width: 150,
          marginVertical: 10,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#3ac",
        }}
      >
        Đăng nhập
      </Button>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button mode="text" onPress={() => navigation.navigate("ForgotPassword")}
          style={{
            alignSelf: "flex-start",
            marginEnd: 5,
          }}>
          Quên mật khẩu?
        </Button>
        <Button mode="text" onPress={() => navigation.navigate("SignUp")}
          style={{
            alignSelf: "flex-end",
            marginEnd: 5,
          }}>
          Đăng ký tài khoản
        </Button>

      </View>

      {/* --------------continue linearGradient--------------------- */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 15,
        }}
      >
        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          colors={["#00000090", "#00000090", "#ffffff00"]}
          style={{
            flex: 1,
            paddingVertical: 1.4,
            borderRadius: 100,
          }}
        />
        <Text> Hoặc đăng nhập </Text>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          colors={["#00000090", "#00000090", "#ffffff00"]}
          style={{
            flex: 1,
            paddingVertical: 1.4,
            borderRadius: 100,
          }}
        />

      </View>
      <Button onPress={() => onGoogleButtonPress().then(() => {
        console.log("Sign in Google Complete")
        navigation.navigate("HomeScreen")
      }).catch((e) => console.error(e))}
        mode="outlined"
        textColor="red"
      >Đăng nhập bằng google</Button>
      {/* <GoogleSigninButton
        style={{ width: 100, height: 50 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={() =>
          onGoogleButtonPress()
            .then(() => {
              console.log("Singned in Google Complete!");
              //navigation.navigate("HomeScreen");
            })
            .catch((e) => console.error(e))
        }
      >
        <Text>Sign in with Google</Text>
      </GoogleSigninButton> */}
      <RNTouchableOpacity />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
