import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const EmptyCard = ({ title, description }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#303D39", "#353535"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.columnGap}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default EmptyCard;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#303D39",
    borderRadius: 5.375,
  },
  title: {
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "Inter-Bold",
  },
  description: {
    color: "#CFD3D2",
    fontSize: 12,
    textAlign: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "90%",
    fontFamily: "Inter-Regular",
  },

  columnGap: {
    flexDirection: "column",
    gap: 15,
  },
});
