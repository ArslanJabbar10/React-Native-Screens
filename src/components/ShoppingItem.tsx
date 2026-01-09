import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { s, vs } from "react-native-size-matters";
import React from 'react'

const ShoppingItem = ({icon, onPress, isSelected}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, isSelected && styles.selected]}>{icon}</View>
    </TouchableOpacity>
  )
}

export default ShoppingItem

const styles = StyleSheet.create({
  container: {
    width: s(60),
    height: vs(60),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: s(10),
    borderWidth: s(1),
    borderColor: "#D8D3D380",
  },
  selected: {
    backgroundColor: "#E6ABA2"
  }
})