import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import PaymentList from "../components/PaymentList";
import BankCard from "../components/BankCard";
import AddButton from "../components/AddButton";
import PaymentCheckout from "../components/PaymentCheckout";

const PaymentScreen = () => {
  return (
    <View style={{ marginTop: vs(57) }}>
      <View style={styles.containerTitle}>
        <BackButton />
        <Text style={styles.paymentTitle}>Payment</Text>
      </View>
      <PaymentList />
      <View style={{ paddingHorizontal: s(24) }}>
        <BankCard />
        <AddButton
          addNew={true}
          text={"ADD NEW"}
          bgColor={"#FFFFFF"}
          fontSize={14}
          textColor={"#FFFFFF"}
        />
        <PaymentCheckout />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: vs(28),
    paddingHorizontal: s(24),
  },
  paymentTitle: {
    fontSize: s(17),
    fontWeight: 400,
    marginStart: s(15),
    color: "#181C2E",
  },
});
