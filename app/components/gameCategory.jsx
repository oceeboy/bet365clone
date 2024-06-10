import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Gameitems from "./Gameitems";
import GameitemSub from "./GameitemSub";
import SportsCategory from "./SportsCategory";

const GameCategory = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        gap: 25,
        marginTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#4F4F4F",
      }}
    >
      <Gameitems />

      <GameitemSub />

      <SportsCategory />
    </View>
  );
};

export default GameCategory;

const styles = StyleSheet.create({});
