import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";
import PlusSign from "../assets/PlusSign";

interface buttonElements {
    addNew: boolean,
    text: string,
    bgColor: any,
    fontSize: number,
    textColor: any
}

const AddButton: React.FC<buttonElements> = ({addNew, text, bgColor, fontSize, textColor}) => {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: bgColor}]}>
      {addNew && <PlusSign />}

      <Text
        style={{
          fontSize: s(fontSize),
          fontWeight: 700,
          color: textColor,
          marginStart: s(10),
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(10),
    borderWidth: s(2),
    borderRadius: s(20),
    width: "100%",
    height: vs(62),
    borderColor: "#F0F5FA",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
