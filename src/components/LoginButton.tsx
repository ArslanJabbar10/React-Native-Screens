import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { HideIcon, Password, UsernameEmail } from "../assets/SignInIcons";

interface LoginRequiredProps {
  login: boolean;
  placeHolder: string;
  hide: boolean;
  hideView: boolean;
  onPress: any;
}

const LoginButton: React.FC<LoginRequiredProps> = ({
  login,
  placeHolder,
  hide,
  onPress,
  hideView,
}) => {
  return (
    <View>
      <View style={[styles.container, { marginBottom: vs(20) }]}>
        <View
          style={{
            marginStart: s(11),
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {login === true ? <UsernameEmail /> : <Password />}
          <TextInput
            style={{
              marginStart: login === true ? s(5) : s(10),
              width: "75%",
            }}
            placeholder={placeHolder}
            secureTextEntry={hideView ? hide : undefined}
          />
          {!login && (
            <TouchableOpacity onPress={onPress} style={{ marginStart: s(15) }}>
              <HideIcon />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {!login && (
        <TouchableOpacity style={{ marginBottom: vs(52) }}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F3F3",
    width: "100%",
    height: vs(55),
    borderWidth: s(1),
    borderRadius: s(10),
    borderColor: "#A8A8A9",
    justifyContent: "center",
  },
  forgotPassword: {
    position: "absolute",
    right: 0,
    bottom: 0,
    color: "#F83758",
    fontSize: s(12),
    fontWeight: 400,
  },
});
