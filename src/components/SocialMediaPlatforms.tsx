import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import SendButton from "./SendButton";

interface SocialMediaPlatformsProps {
  title: string;
  icon: React.ReactNode;
}

const SocialMediaPlatforms: React.FC<SocialMediaPlatformsProps> = ({ title, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sendButton}>{icon}</View>
      <Text style={styles.text}>{title}</Text>
      <SendButton />
    </View>
  );
};

export default SocialMediaPlatforms;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: s(1),
    borderBottomColor: "#E4E6E8",
    paddingBottom: s(15),
    paddingVertical: s(21.5),
  },
  text: {
    flex: 1,
    marginStart: s(12),
    fontSize: s(12),
    color: "#8083A3",
  },
  sendButton: {
    width: s(46),
    height: s(46),
    borderRadius: s(23),
    backgroundColor: "#FFFFFF",
    borderWidth: s(1),
    borderColor: "#E4E6E8",
    justifyContent: "center",
    alignItems: "center",
  },
});
