import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { icons, mockData } from "../constants";

const SportsComponent = () => {
  const BetBoostItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.betbuilder}>
        <View style={styles.betbuilderHeader}>
          <View style={styles.itemHeaderContainer}>
            <Image
              style={styles.itemHeaderImage}
              source={icons.soocerball}
              resizeMode="contain"
            />
            <Text style={styles.itemHeaderText}>{item.description}</Text>
          </View>
        </View>
        <View style={styles.betbuilderConent}>
          <View style={styles.subheader}>
            <Text style={styles.subheaderText}>Bet Builder</Text>
          </View>
          {item.betOptions.map((option, index) => (
            <View key={index} style={styles.betbuilderInfo}>
              <Image
                style={styles.imgBetcircle}
                source={icons.betcircle}
                resizeMode="contain"
              />
              <Text style={styles.betbuilderText}>{option}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.betbuilderOddsContainer}>
        <TouchableOpacity style={styles.betbuilderOdds}>
          <View style={[styles.container]}>
            <Text style={styles.betbuilderOddsstriked}>+473</Text>
            <View style={styles.strikethrough} />
          </View>

          <Image
            style={styles.arrowboostOdds}
            source={icons.arrowboost}
            resizeMode="contain"
          />
          <Text style={styles.betbuilderOddsUpdated}>+548</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={mockData}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <BetBoostItem item={item} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: 5,
    backgroundColor: "#13352E",
    borderRadius: 5,
  },
  betbuilderHeader: {
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "flex-start",
  },
  itemHeaderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  itemHeaderImage: {
    width: 12,
    height: 12,
  },
  itemHeaderText: {
    fontSize: 12.75,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  betbuilder: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",

    paddingEnd: 40,
    paddingStart: 10,
    paddingTop: 20,
    paddingBottom: 10,
  },
  betbuilderConent: {
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 5,
  },
  subheader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
  },
  subheaderText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#A0AEAB",
  },
  imgBetcircle: {
    height: 5,
    width: 5,
  },
  betbuilderText: {
    fontSize: 12,
    color: "#A0AEAB",
  },
  betbuilderInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
  },
  betbuilderOdds: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  arrowboostOdds: {
    height: 9,
    width: 11,
  },
  betbuilderOddsstriked: {
    fontSize: 14,
    color: "#A0AEAB",
  },
  betbuilderOddsUpdated: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  betbuilderOddsContainer: {
    width: 240,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#294741",
  },
  strikethrough: {
    position: "absolute",
    top: "40%",
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "#A0AEAB",
    transform: [{ rotate: "10deg" }],
  },
  container: {
    position: "relative",
  },
});

export default SportsComponent;
