import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { s } from "react-native-size-matters";
const BackButton = () => {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.backButton}>
          <Ionicons name="chevron-back" size={16} color="black" />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF0F4",
  },
});
