import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";
import { Shirts, Watch, Purse, Shoes, Glasses } from "../assets/ShoppingItems";
import ShoppingItem from "./ShoppingItem";

const shoppingItems = [
  { itemName: "watch", icon: <Watch /> },
  { itemName: "shirts", icon: <Shirts /> },
  { itemName: "purse", icon: <Purse /> },
  { itemName: "shoes", icon: <Shoes /> },
  { itemName: "glasses", icon: <Glasses /> },
];

const ShoppingItemsOptions = () => {
  const [isSelected, setSelected] = useState("");

  return (
    <View style={styles.container}>
      <FlatList
        data={shoppingItems}
        keyExtractor={(item) => item.itemName}
        renderItem={({ item }) => (
          <ShoppingItem
            icon={item.icon}
            onPress={() => setSelected(item.itemName)}
            isSelected={isSelected === item.itemName}
          />
        )}
        horizontal
        contentContainerStyle={{
          gap: s(15),
        }}
      />
    </View>
  );
};

export default ShoppingItemsOptions;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(20),
    paddingStart: s(24),
  },
});
