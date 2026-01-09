import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import React, { useEffect, useRef } from "react";
import CreditCard from "../assets/CreditCard";
import LottieView from 'lottie-react-native';


const BankCard = () => {
  return (
    <View style={{  marginTop: vs(25) }}>
      <View style={styles.container}>
        <CreditCard />
        {/* <LottieView
        autoPlay
        //ref={animation}
        style={{
          width: s(150),
          height: s(150),
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/BankCardAnimation.json')}
      /> */}
        <Text
          style={{
            marginTop: vs(18),
            color: "#32343E",
            fontSize: s(16),
            fontWeight: 700,
          }}
        >
          No master card added
        </Text>
        <Text
          style={{
            marginTop: vs(6),
            color: "#2D2D2D",
            fontSize: s(15),
            fontWeight: 400,
            paddingHorizontal: s(30),
            textAlign: "center",
          }}
        >
          You can add a master card and save it for later
        </Text>
      </View>
    </View>
  );
};

export default BankCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F8F9",
    width: "100%",
    borderRadius: s(10),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: vs(20),
  },
});
