import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SettingsIcon from "../../svgstore/components/SettingsCashout";
import { formatCurrency } from "../constants";

const CashOutFooter = ({ wager }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.rowGap}>
          <Text style={styles.buttonText}>Cash Out</Text>
          <Text style={styles.cashOutText}>{formatCurrency(wager)}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingButton}>
        <SettingsIcon />
      </TouchableOpacity>
    </View>
  );
};

export default CashOutFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#4F4F4F",
    width: 325,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5.37,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontFamily: "Inter-ExtraBold",
  },
  cashOutText: {
    color: "#00FEB5",
    fontSize: 17,
    fontFamily: "Inter-Bold",
  },
  settingButton: {
    width: 50,
    borderWidth: 1.79,
    borderColor: "#4F4F4F",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5.37,
  },
  rowGap: {
    flexDirection: "row",
    gap: 6,
  },
});
