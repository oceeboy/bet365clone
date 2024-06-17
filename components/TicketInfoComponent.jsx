import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { icons, teamIcon } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import TeamInfo from "./TeamInfo";
const TicketInfoComponent = ({ item, width }) => {
  return (
    <View style={[styles.ticketInfoBox, { width }]}>
      <LinearGradient
        style={{ borderRadius: 5 }}
        colors={["rgba(55, 45, 40, 0.5)", "rgba(46, 42, 41, 0.5)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.ticketTimeBox}>
            <Text style={styles.ticketDateTime}>{item.dateTime}</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View
                style={{
                  width: 20,
                  height: 15,

                  overflow: "hidden",
                }}
              >
                <Image
                  style={{ width: 20, height: 12 }}
                  source={item.liveIcon}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  paddingHorizontal: 7.5,
                  height: 12,
                  backgroundColor: "#00FFB6",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                }}
              >
                <Text
                  style={{ fontSize: 12, color: "black", fontWeight: "bold" }}
                >
                  {item.boostCount}
                </Text>
                <Image
                  style={{ height: 7, width: 8 }}
                  source={item.boostIcon}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TeamInfo team={item.team1} />
            <View style={{ justifyContent: "center" }}>
              <Text style={{ color: "#ffffff" }}>@</Text>
            </View>
            <TeamInfo team={item.team2} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            overflow: "hidden",
          }}
        >
          {item.odds.map((odd, index) => (
            <TouchableOpacity key={index} style={styles.oddsBttn}>
              <View style={styles.oddsContainer}>
                <Text style={styles.oddsNumber}>{odd.number}</Text>
                <Text style={styles.odds}>{odd.value}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 110,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(71, 66, 63, 1)",
  },
  ticketTimeBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 5,
  },
  ticketDateTime: {
    fontSize: 12,
    color: "rgba(212, 212, 212, 1)",
  },
  ticketTeamInfo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  teamImgContainer: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  teamImg: {
    width: 35,
    height: 35,
  },
  oddsBttn: {
    height: 45,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  oddsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  teamName: {
    fontSize: 12.5,
    fontWeight: "bold",
    color: "#ffffff",
  },
  oddsNumber: { fontSize: 12.5, color: "#DDDDDD" },
  odds: { fontSize: 12.5, color: "#FFDE00" },
  ticketInfoBox: {
    height: 155,
    justifyContent: "space-between",
    overflow: "hidden",
    marginLeft: 10,
    borderRadius: 5,
  },
});

export default TicketInfoComponent;
