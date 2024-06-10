import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CustomButtonAuth = ({
  title,
  value,
  placeholder,
  handlePress,
  containerStyles,
  ...props
}) => {
  return (
    <View className={containerStyles}>
      <TouchableOpacity style={styles.customButtonAuth} onPress={handlePress}>
        <Text style={styles.customButtonAuthText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButtonAuth;

const styles = StyleSheet.create({
  customButtonAuth: {
    height: 43,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2EC193",
  },
  customButtonAuthText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333333",
  },
});
