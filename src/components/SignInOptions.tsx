import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { s, vs } from "react-native-size-matters";
import React from 'react'
import { GoogleIcon } from '../assets/SignInOptionsLogos';

const SignInOptions = ({iconType}: any) => {
  return (
    <TouchableOpacity>
      <View style={styles.loginTypeBox}>{iconType}</View>
    </TouchableOpacity>
  )
}

export default SignInOptions

const styles = StyleSheet.create({
    loginTypeBox:{
        width: s(54),
        height: vs(48),
        backgroundColor: "#FCF3F6",
        borderRadius: s(27),
        borderWidth: s(1),
        borderColor: "#F83758",
        justifyContent: "center", alignItems: "center"
    }
})