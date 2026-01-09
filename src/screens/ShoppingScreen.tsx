import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";
import OffersList from "../components/OffersList";
import ShoppingCategoriesHeader from "../components/ShoppingCategoriesHeader";
import Greeting from "../components/Greeting";
import HeaderShopScreen from "../components/HeaderShopScreen";
import ShoppingItemsOptions from "../components/ShoppingItemsOptions";
import ShoppingItemsList from "../components/ShoppingItemsList";

const ShoppingScreen = () => {
  return (
    <View style={{ flex: 1, marginTop: vs(52) }}>
      <HeaderShopScreen />
      <Greeting />
      <Text style={styles.startShopping}>Let's start shopping!</Text>
      <OffersList />
      <ShoppingCategoriesHeader />
      <ShoppingItemsOptions />
      <ShoppingItemsList />
    </View>
  );
};

export default ShoppingScreen;

const styles = StyleSheet.create({
  startShopping: {
    color: "#00000080",
    fontSize: s(12),
    fontWeight: 600,
    marginTop: vs(8),
    marginBottom: vs(20),
    paddingHorizontal: s(24),
  },
});
