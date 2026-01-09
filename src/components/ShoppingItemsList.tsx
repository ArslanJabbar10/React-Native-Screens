import { StyleSheet, Text, View, FlatList } from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";
import ItemView from "./ItemView";
import { dummyData } from "../../data/data";
import MeditationCards from "./MeditationCards";

// const listOfItems = [
//   { itemName: "Redmi", discount: "50% OFF", price: "45,000" },
//   { itemName: "Apple", discount: "50% OFF", price: "65,000" },
//   { itemName: "Samsung", discount: "50% OFF", price: "55,000" },
//   { itemName: "Oppo", discount: "50% OFF", price: "40,000" },
// ];

const ShoppingItemsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          gap: s(5),
          marginBottom: vs(16),
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          paddingBottom: vs(145),
          paddingTop: vs(15),
        }}
        renderItem={({ item }) => (
          <MeditationCards
            imageURL={item.image}
            title={item.title}
            date={item.date}
          />
        )}
      />
    </View>
  );
};

export default ShoppingItemsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: s(20),
    paddingBottom: vs(35),
    paddingTop: vs(10),
  },
});
