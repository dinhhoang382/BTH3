import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/LoginScreen";
import HomeScreen from "./src/HomeScreen";
import LottieAnimation from "./src_animation/LottieAnimation";
import Animation from "./src_animation/A";
import Login from "./demo/DmLogin";
import SignUpScreen from "./src/SignUpScreen";
import ForgotPasswordScreen from "./src/ForgotPasswordScreen";
import TabScreen from "./src/TabScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
      >
        {/* <Stack.Screen name="A" component={Animation}/> */}
        <Stack.Screen name="LoginDemo" component={Login}/>
        <Stack.Screen name="LottieAnimation" component={LottieAnimation} options={{headerShown: false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerShown: false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="TabScreen" component={TabScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}