import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";

const ShoppingCategoriesHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topCateg}>Top Categories</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingCategoriesHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: s(24),
    marginTop: vs(18),
  },
  seeAll: {
    color: "#F17547",
  },
  topCateg: {
    fontSize: s(20),
    fontWeight: 600,
  },
});
