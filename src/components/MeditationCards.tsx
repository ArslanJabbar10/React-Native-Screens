import { ImageBackground, StyleSheet, Text, View, Dimensions } from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";
import CameraIcon from "../assets/CameraIcon";

const PhoneWidth = Dimensions.get("window").width;
const CardWidth = (PhoneWidth - s(16) * 3) /2;

interface CardType {
  imageURL: string,
  title: string,
  date: string,
}

const MeditationCards: React.FC<CardType> = ({imageURL, title, date}) => {
  return (
    <ImageBackground
      style={styles.container}
      imageStyle={styles.image}
      source={{
        uri: imageURL,
      }}
    >
      <View style={styles.liveBadge}>
        <Text style={styles.liveText}>Live</Text>
      </View>
      <View style={styles.contentImage}>
        <Text style={styles.contentTitle}>{title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CameraIcon />
          <Text style={styles.dateTime}>{date}</Text>
        </View>
      </View>
      <View style={styles.overlay} />
    </ImageBackground>
  );
};

export default MeditationCards;

const styles = StyleSheet.create({
  container: {
    width: CardWidth,
    height: vs(145),
    borderRadius: s(12),
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.7,
  },
  contentImage: {
    position: "absolute",
    bottom: vs(10),
    left: s(10),
  },
  contentTitle: {
    fontSize: s(12),
    fontWeight: "semibold",
    color: "#FFFFFF",
    marginBottom: vs(3),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  dateTime: {
    fontSize: s(12),
    fontWeight: 400,
    color: "#FFFFFF",
    marginStart: s(7),
  },
  liveBadge: {
    height: vs(22),
    width: s(39),
    borderRadius: s(90),
    position: "absolute",
    right: s(10),
    top: vs(7),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E41111",
  },
  liveText: { color: "#FFFFFF", fontSize: s(11), fontWeight: "semibold" },
});
