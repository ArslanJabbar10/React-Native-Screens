import { StyleSheet, TouchableOpacity } from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";

const ShoppingScreenHeader = ({ icon }: any) => {
  return (
    <TouchableOpacity style={styles.sideBarAndSearchIcon}>
      {icon}
    </TouchableOpacity>
  );
};

export default ShoppingScreenHeader;

const styles = StyleSheet.create({
  sideBarAndSearchIcon: {
    width: s(41),
    height: vs(36),
    borderRadius: s(20.5),
    backgroundColor: "#D9D9D940",
    justifyContent: "center",
    alignItems: "center",
  },
});
