import { StyleSheet, Text, View } from 'react-native'
import { s, vs } from "react-native-size-matters";
import React from 'react'
import HandWaveIcon from '../assets/HandWaveIcon'

const Greeting = () => {
  return (
    <View style={styles.greeting}>
        <Text style={styles.helloName}>Hello Fola</Text>
        <HandWaveIcon />
      </View>
  )
}

export default Greeting

const styles = StyleSheet.create({helloName: { fontSize: s(20), fontWeight: 600, marginEnd: s(7) },
  greeting: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: vs(24),
    paddingHorizontal: s(24),
  },})