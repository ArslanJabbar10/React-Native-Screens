import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";
import { Cash, MasterCard, Paypal, Visa } from "../assets/PaymentTypes";
import PaymentMethod from "./PaymentMethod";

const PaymentMethods = [
  { label: "Cash", icon: <Cash /> },
  { label: "Visa", icon: <Visa /> },
  { label: "Mastercard", icon: <MasterCard /> },
  { label: "Paypal", icon: <Paypal /> },
];

const PaymentList = () => {
  const [isSelected, setSelected] = useState("");
  return (
    <View>
      <FlatList
        data={PaymentMethods}
        keyExtractor={(item) => item.label}
        horizontal
        renderItem={({ item }) => (
          <PaymentMethod
            onPress={() => setSelected(item.label)}
            isSelected={isSelected === item.label}
            title={item.label}
            icon={item.icon}
          />
        )}
        contentContainerStyle={{
          gap: s(12),
          paddingHorizontal: s(16),
          paddingTop: vs(8),
        }}
      />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
