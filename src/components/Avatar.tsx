import { StyleSheet, Image } from 'react-native'
import { s } from "react-native-size-matters";

import React from 'react'

const Avatar = () => {
  return (
    
    <Image
        style={styles.avatar}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRdr_r1Fl8o0FcWly2io2HoSESqbvZ68maBg&s",
        }}
      />
  )
}

export default Avatar

const styles = StyleSheet.create({avatar: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
  }})