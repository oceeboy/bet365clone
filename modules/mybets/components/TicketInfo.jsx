import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { formatNumber } from "../constants";
import WinIcon from "../../svgstore/components/WinIcon";
import NotPlayed from "../../svgstore/components/NotPlayed";

const TicketInfo = ({
  team,
  odds,
  bookings,
  selected,
  oddtype,
  status,
  dateTime,
  stats,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowGap}>
        <View style={{ height: 18, justifyContent: "center" }}>
          {status === "won" ? (
            <WinIcon width={14} height={14} />
          ) : (
            <NotPlayed />
          )}
        </View>
        <View style={styles.columnGap}>
          <Text style={styles.selectionText}>{selected}</Text>
          <Text style={styles.bookingsText}>{bookings}</Text>
          <View style={{ gap: 10, flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.teamsText}>{team}</Text>
            {stats === "cashout" && (
              <Text style={styles.gameTime}>{dateTime}</Text>
            )}
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.oddsText}>{formatNumber(odds, oddtype)}</Text>
      </View>
    </View>
  );
};

export default TicketInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowGap: {
    flexDirection: "row",
    gap: 5,
    alignItems: "flex-start",
  },
  selectionText: {
    fontSize: 14,
    fontFamily: "Inter-ExtraBold",
    color: "#fff",
    lineHeight: 18,
  },
  bookingsText: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "#fff",
  },
  teamsText: {
    fontSize: 11,
    fontFamily: "Inter-Regular",
    color: "#fff",
  },
  columnGap: {
    flexDirection: "column",
    gap: 4.5,
  },
  oddsText: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#fff",
    lineHeight: 18,
  },
  gameTime: {
    fontSize: 11,
    fontFamily: "Inter-Regular",
    color: "#fff",
  },
});
