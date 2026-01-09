import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import AddButton from "../components/AddButton";
import React from "react";

const PaymentCheckout = () => {
  return (
    <View style={{ marginTop: vs(25) }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ color: "#A0A5BA" }}>Total:</Text>
        <Text
          style={{
            marginStart: s(14),
            fontSize: s(30),
            fontWeight: 400,
            color: "#181C2E",
          }}
        >
          $96
        </Text>
      </View>
      <AddButton
        addNew={false}
        text={"PAY & CONFIRM"}
        bgColor={"#FF7622"}
        fontSize={14}
        textColor={"#FFFFFF"}
      />
    </View>
  );
};

export default PaymentCheckout;

const styles = StyleSheet.create({});
