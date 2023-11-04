import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { Button } from "react-native-paper";
import TabBarApp from "../component/TabBar";
import DemoScreen from "../component/TabBar";

const HomeScreen = () => {
  return (
       <TabBarApp/>
   );
};

export default HomeScreen;

const styles = StyleSheet.create({});
