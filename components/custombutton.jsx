import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ redirect, title }) => {
  return (
    <>
      <TouchableOpacity style={styles.CustomButton} onPress={redirect}>
        <Text style={styles.customText}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  CustomButton: {
    width: 120,
    height: 50,
    backgroundColor: "#20CF98",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "98%",
    height: "98%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#10f899",
    borderRadius: 10,
  },
  customText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: "black",
  },
});
