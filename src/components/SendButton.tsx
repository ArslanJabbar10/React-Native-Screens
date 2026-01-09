import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import SendIcon from "../assets/SendIcon";

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.sendButton}>
      <SendIcon />
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  sendButton: {
    width: s(46),
    height: s(46),
    borderRadius: s(23),
    backgroundColor: "#1077AF",
    justifyContent: "center",
    alignItems: "center",
  },
});
