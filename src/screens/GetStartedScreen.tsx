import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";
import AddButton from "../components/AddButton";

const GetStartedScreen = () => {
  return (
    <>
      <ImageBackground
        source={require("../../assets/bgImageClothes.jpg")}
        style={{ flex: 1 }}
      >
        <View style={{ position: "absolute", bottom: 100, paddingHorizontal: s(37) }}>
          <Text style={{ fontSize: s(37), color: "#FFFFFF", textAlign: "center", fontWeight: 600 }}>
            You want Authentic, here you go!
          </Text>
          <Text style={{ marginBottom: vs(30),textAlign:"center", fontSize: s(17), fontWeight: 400, color: "#F2F2F2", marginTop: vs(14) }}>
            Find it here, by now!
          </Text>
          <AddButton
          addNew={false}
          text={"Get Started"}
          bgColor={"#F83758"}
          fontSize={23}
          textColor={"#FFFFFF"}
        />
        </View>
      </ImageBackground>
    </>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({});
