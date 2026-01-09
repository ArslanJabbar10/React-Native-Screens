import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import React, { useState } from "react";
import LoginButton from "../components/LoginButton";
import AddButton from "../components/AddButton";
import SignInOptions from "../components/SignInOptions";
import {
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
} from "../assets/SignInOptionsLogos";

const SignInScreen = () => {
  const [hidePressed, setHide] = useState(true);
  function changeHide() {
    if (hidePressed) {
      setHide(false);
    } else {
      setHide(true);
    }
  }
  return (
    <View style={{ marginTop: vs(63), paddingHorizontal: s(32) }}>
      <Text style={{ fontSize: s(36), fontWeight: 700, marginBottom: vs(36) }}>
        Welcome{"\n"}Back!
      </Text>
      <LoginButton
        onPress={changeHide}
        login={true}
        placeHolder={"Username or Email"}
        hide={hidePressed}
        hideView={false}
      />
      <LoginButton
        onPress={changeHide}
        login={false}
        placeHolder={"Password"}
        hide={hidePressed}
        hideView={true}
      />
      <AddButton
        addNew={false}
        text={"Login"}
        bgColor={"#F83758"}
        fontSize={20}
        textColor={"#FFFFFF"}
      />
      <Text style={{ textAlign: "center", marginTop: vs(50) }}>
        - OR Continue with -
      </Text>
      <View
        style={{
          marginTop: vs(15),
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <SignInOptions iconType={<GoogleIcon />} />
        <SignInOptions iconType={<AppleIcon />} />
        <SignInOptions iconType={<FacebookIcon />} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: vs(20),
        }}
      >
        <Text>Create an Account</Text>
        <TouchableOpacity style={{ marginStart: s(5) }}>
          <Text style={{ color: "#F83758", textDecorationLine: "underline" }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
