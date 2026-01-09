import { View, StyleSheet, Text } from "react-native";
import BackButton from "../components/BackButton";
import Avatar from "../components/Avatar";
import { s, vs } from "react-native-size-matters";
import SocialMediaPlatforms from "../components/SocialMediaPlatforms";
import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";

const ContactUs = () => {
  return (
    <>
      <View style={{ marginTop: vs(50), paddingHorizontal: s(20) }}>
        <View style={styles.header_parent}>
          <BackButton />
          <Avatar />
        </View>
        <Text style={styles.contactUsTitle}>Contact Us</Text>
        <View style={styles.socialContainer}>
          <Text style={styles.socialText}>Social Media Platforms</Text>
          <SocialMediaPlatforms
            icon={<FontAwesome name="whatsapp" size={24} color="#178AD9" />}
            title={"WhatsApp"}
          />
          <SocialMediaPlatforms
            icon={<AntDesign name="twitter" size={24} color="#178AD9" />}
            title={"X"}
          />
          <SocialMediaPlatforms
            icon={<Entypo name="instagram" size={24} color="#178AD9" />}
            title={"Instagram"}
          />
          <SocialMediaPlatforms
            icon={
              <FontAwesome name="snapchat-ghost" size={24} color="#178AD9" />
            }
            title={"Snap Chat"}
          />
          <SocialMediaPlatforms
            icon={<AntDesign name="tik-tok" size={24} color="#178AD9" />}
            title={"Tik Tok"}
          />
        </View>
      </View>
    </>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  header_parent: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  socialContainer: {
    backgroundColor: "#F5F5FA",
    borderRadius: s(14),
    paddingHorizontal: s(15),
    marginTop: vs(22),
    paddingBottom: vs(20),
  },
  socialText: {
    fontSize: s(16),
    fontWeight: "600",
    color: "#000000",
    marginTop: vs(15),
  },
  contactUsTitle: {
    fontSize: s(30),
    fontWeight: "600",
    marginTop: vs(20),
  },
});
