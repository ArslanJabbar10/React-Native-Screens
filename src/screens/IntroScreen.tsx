import { StyleSheet, View } from "react-native";
import FoodLogo from "../assets/FoodLogo";
import SunImage from "../assets/SunImage";
import { SafeAreaView } from "react-native-safe-area-context";

const IntroScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FoodLogo />
        <SunImage style={styles.sunImage} />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  sunImage: { position: "absolute", bottom: 0, right: 0 },
});

export default IntroScreen;
