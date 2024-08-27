import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { formatCurrency } from "../constants";

const TicketHeader = ({ wager, type, returned }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowGap3}>
        <Text style={styles.textHeader}>{formatCurrency(wager)}</Text>
        <Text style={styles.textHeader}>{type}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.shareText}>Share</Text>
        <View style={styles.returnedContainer}>
          <Text style={styles.returnedText}>{formatCurrency(returned)}</Text>
          <Text style={styles.returnedText}>Returned</Text>
        </View>
      </View>
    </View>
  );
};

export default TicketHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowGap3: {
    flexDirection: "row",
    gap: 3,
  },
  textHeader: {
    fontSize: 14.27,
    fontFamily: "Inter-Bold",
    color: "#00FFB6",
  },
  shareText: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "#00FFB6",
    textTransform: "capitalize",
  },

  rowContainer: {
    flexDirection: "row",
    gap: 13,
    alignItems: "center",
  },
  returnedContainer: {
    flexDirection: "column",
    paddingHorizontal: 10.5,
    paddingVertical: 2,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#5B605E",
    minWidth: 90,
  },
  returnedText: {
    textAlign: "center",
    fontSize: 11,
    fontFamily: "Inter-Bold",
    color: "#00B383",
  },
});
