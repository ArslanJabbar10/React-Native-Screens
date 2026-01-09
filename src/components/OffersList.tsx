import { StyleSheet, Text, View, FlatList } from "react-native";
import { s, vs } from "react-native-size-matters";

import React from "react";
import OfferCards from "./OfferCards";

const OffersList = () => {
  const offers = [
    {
      offerNo: "1",
      offerText: "20% OFF DURING THE WEEKEND",
      bgcolor: "#F17547",
      buttonBgColor: "#FFFFFF",
      getNowColor: "#F17547",
    },
    {
      offerNo: "2",
      offerText: "30% OFF DURING THE WEEKEND",
      bgcolor: "#1383F1",
      buttonBgColor: "#50D63B",
      getNowColor: "#FFFFFF",
    },
  ];
  return (
    <View style={{ paddingStart: s(24) }}>
      <FlatList
        data={offers}
        keyExtractor={(item) => item.offerNo}
        renderItem={({ item }) => (
          <OfferCards
            offer={item.offerText}
            bgcolor={item.bgcolor}
            buttonColor={item.buttonBgColor}
            textColor={item.getNowColor}
          />
        )}
        horizontal
        contentContainerStyle={{
          gap: s(19),
        }}
      />
    </View>
  );
};

export default OffersList;

const styles = StyleSheet.create({});
