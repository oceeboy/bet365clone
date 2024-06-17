import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { teamIcon } from "../constants";

const TeamInfo = ({ team }) => {
  return (
    <View style={styles.ticketTeamInfo}>
      <View style={styles.teamImgContainer}>
        <Image style={styles.teamImg} source={team.icon} resizeMode="contain" />
      </View>
      <Text style={styles.teamName}>{team.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  teamName: {
    fontSize: 12.5,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default TeamInfo;
