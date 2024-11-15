import React from "react";
import { View, FlatList } from "react-native";
import TicketInfoComponent from "./TicketInfoComponent";
import { mlbGameData } from "../constants";

const TicketScreen = () => {
  const width = mlbGameData.length > 0 ? 270 : 410; // adjust width based on data length
  return (
    <FlatList
      data={mlbGameData}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TicketInfoComponent item={item} width={width} />
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default TicketScreen;
