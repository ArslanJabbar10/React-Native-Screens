import { StyleSheet, Text, View } from 'react-native'
import { s, vs } from "react-native-size-matters";
import React from 'react'
import ShoppingScreenHeaderComp from './ShoppingScreenHeaderComp';
import SideBarLogo from '../assets/SideBarLogo';
import SearchIcon from '../assets/SearchIcon';

const HeaderShopScreen = () => {
  return (
    <View style={styles.container}>
        <ShoppingScreenHeaderComp icon={<SideBarLogo />} />
        <ShoppingScreenHeaderComp icon={<SearchIcon />} />
      </View>
  )
}

export default HeaderShopScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: s(24),
      },
})