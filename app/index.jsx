import { Text, View, StyleSheet, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper.jsx";
import Loading from "../components/Loading.jsx";


const Index = () => {
    const router = useRouter();
  return (
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Loading />
    </View>
  )
}

export default Index
