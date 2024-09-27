import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { formatCurrency } from "../constants";

const TicketFooter = ({ wager, returned, stats }) => {
  return (
    <View style={styles.container}>
      <View style={styles.columnGap}>
        <Text style={styles.labelText}>Wager</Text>
        <Text style={styles.amountText}>{formatCurrency(wager)}</Text>
      </View>
      <View style={styles.columnGap}>
        <Text style={styles.labelText}>
          {stats === "cashout" ? "Total To Return" : "Return"}
        </Text>
        <Text style={styles.amountText}>{formatCurrency(returned)}</Text>
      </View>
    </View>
  );
};

export default TicketFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 138,
  },
  columnGap: {
    flexDirection: "column",
    gap: 5,
  },
  labelText: {
    fontSize: 11,
    fontFamily: "Inter-Regular",
    color: "#DDDDDD",
  },
  amountText: {
    fontSize: 15.5,
    fontFamily: "Inter-Bold",
    color: "#FFFFFF",
  },
});
