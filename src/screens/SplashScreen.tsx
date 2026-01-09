import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import SplashLogo from "../assets/SplashLogo";

const SplashScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <SplashLogo />
        <Text style={styles.splashTitle}>Stylish</Text>
      </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  splashTitle: {
    color: "#F83758",
    marginStart: s(9),
    fontSize: s(40),
    fontWeight: 400,
  },
});
