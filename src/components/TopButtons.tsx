import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { act, useState } from "react";

const tabs = ["Live", "Recorded"];
const TAB_BG = "#F5F5F4";
const ACTIVE_BG = "#75563B";
const INACTIVE_TEXT = "#2C2016";
const ACTIVE_TEXT = "#FFFFFF";

const TopButtons = () => {
  const [activeTab, setActiveTab] = useState("Live");
  return (
    <View style={styles.container}>
      {tabs.map((tabButton, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tabButton,
            activeTab === tabButton && { backgroundColor: ACTIVE_BG },
          ]}
          onPress={() => setActiveTab(tabButton)}
        >
          <Text
            style={
              activeTab === tabButton ? styles.activeText : styles.inActiveText
            }
          >
            {tabButton}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TopButtons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: TAB_BG,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: s(12),
    height: vs(48),
    padding: s(4),
  },
  tabButton: {
    flex: 1,
    borderRadius: s(8),
    padding: s(4),
    height: vs(32),
    justifyContent: "center",
    alignItems: "center",
  },
  activeText: { color: ACTIVE_TEXT, fontSize: s(14), fontWeight: "semibold" },
  inActiveText: {
    color: INACTIVE_TEXT,
    fontSize: s(14),
    fontWeight: "semibold",
  },
});
