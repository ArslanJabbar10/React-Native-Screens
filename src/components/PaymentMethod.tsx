import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";
import React, { ReactNode } from "react";

interface PaymentMethodCardProps {
  isSelected?: boolean;
  title: string;
  icon: ReactNode;
  onPress?: () => void;
}

const PaymentMethod: React.FC<PaymentMethodCardProps> = ({
  isSelected = false,
  title,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: s(85) }}>
      {isSelected && (
        <View style={styles.checkBox}>
          <Feather name="check" size={s(15)} color="#FFFFFF" />
        </View>
      )}
      <View
        style={[
          styles.containerCash,
          isSelected && styles.selectedPaymentMethodbox,
        ]}
      >
        {icon}
      </View>
      <Text style={styles.paymentTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  containerCash: {
    backgroundColor: "#F0F5FA",
    borderRadius: s(10),
    width: s(85),
    height: vs(72),
    justifyContent: "center",
    alignItems: "center",
  },
  paymentTitle: {
    fontSize: s(14),
    fontWeight: 400,
    textAlign: "center",
    color: "#464E57",
    marginTop: vs(4),
  },
  selectedPaymentMethodbox: {
    backgroundColor: "#FFFFFF",
    borderWidth: s(2),
    borderRadius: s(10),
    borderColor: "#FF7622",
  },
  checkBox: {
    width: s(24),
    height: vs(20),
    borderRadius: s(12),
    borderWidth: s(2),
    borderColor: "#FFFFFF",
    backgroundColor: "#FF7622",
    position: "absolute",
    zIndex: 1,
    top: vs(-8),
    right: s(-8),
    justifyContent: "center",
    alignItems: "center",
  },
});
