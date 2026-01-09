import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";

const OfferCards = ({ offer, bgcolor, buttonColor, textColor }: any) => {
  return (
    <View style={[styles.container, { backgroundColor: bgcolor }]}>
      <View style={styles.containerContent}>
        <Text style={styles.offerText}>{offer}</Text>
        <TouchableOpacity
          style={[styles.buttonGetNow, { backgroundColor: buttonColor }]}
        >
          <Text style={[styles.getNowText, { color: textColor }]}>Get Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OfferCards;

const styles = StyleSheet.create({
  container: {
    width: s(220),
    height: vs(110),
    borderRadius: s(10),
  },
  containerContent: { paddingStart: s(19), marginTop: vs(15) },
  offerText: { fontSize: s(16), fontWeight: 700, color: "#FFFFFF" },
  buttonGetNow: {
    width: s(70),
    height: vs(28),
    borderRadius: s(22),
    justifyContent: "center",
    alignItems: "center",
    marginTop: vs(12),
  },
  getNowText: { fontSize: s(12), fontWeight: "bold" },
});
