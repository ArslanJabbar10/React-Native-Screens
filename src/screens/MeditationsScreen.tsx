import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";
import TopButtons from "../components/TopButtons";
import MeditationCards from "../components/MeditationCards";
import { dummyData } from "../../data/data";

const MeditationsScreen = () => {
  return (
    <View style={{ paddingHorizontal: s(16), marginTop: s(60) }}>
      <Text style={styles.meditationsTitle}>Meditations</Text>
      <Text style={styles.meditationsBody}>
        Lorem Ipsum is simply dummy text
      </Text>
      <TopButtons />
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          marginBottom: vs(16),
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          paddingBottom: vs(145),
          paddingTop: vs(15)
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

export default MeditationsScreen;

const styles = StyleSheet.create({
  meditationsTitle: {
    fontSize: s(20),
    fontWeight: "600",
    marginBottom: vs(6),
    color: "#1D150F",
  },
  meditationsBody: {
    fontSize: s(14),
    marginBottom: vs(16),
    fontWeight: "400",
    color: "#2C2016",
  },
});
