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
import { formatNumber } from "../modules/mybets/constants";

const SportsComponent = () => {
  const BetBoostItem = ({ item }) => (
    // <TouchableOpacity style={styles.itemContainer}>
    //   <View style={styles.betbuilder}>
    //     <View style={styles.betbuilderHeader}>
    //       <View style={styles.itemHeaderContainer}>
    //         <Image
    //           style={styles.itemHeaderImage}
    //           source={item.icon}
    //           resizeMode="contain"
    //         />
    //         <Text style={styles.itemHeaderText}>{item.description}</Text>
    //       </View>
    //     </View>
    //     <View style={styles.betbuilderConent}>
    //       <View style={styles.subheader}>
    //         <Text style={styles.subheaderText}>{item.subheader}</Text>
    //       </View>
    //       {item.betOptions.map((option, index) => (
    //         <View key={index} style={styles.betbuilderInfo}>
    //           <Image
    //             style={styles.imgBetcircle}
    //             source={icons.betcircle}
    //             resizeMode="contain"
    //           />
    //           <Text style={styles.betbuilderText}>{option}</Text>
    //         </View>
    //       ))}
    //     </View>
    //   </View>

    //   <View style={styles.betbuilderOddsContainer}>
    //     <TouchableOpacity style={styles.betbuilderOdds}>
    //       <View style={[styles.container]}>
    //         <Text style={styles.betbuilderOddsstriked}>
    //           {formatNumber(item.odds, item.oddtype)}
    //         </Text>
    //         <View style={styles.strikethrough} />
    //       </View>

    //       <Image
    //         style={styles.arrowboostOdds}
    //         source={icons.arrowboost}
    //         resizeMode="contain"
    //       />
    //       <Text style={styles.betbuilderOddsUpdated}>
    //         {formatNumber(item.oddsupdated, item.oddtype)}
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    // </TouchableOpacity>
    <View style={styles.container}>
      <View style={styles.padCN}>
        <View style={styles.rowGap8}>
          <Image
            source={item.icon}
            style={{
              width: 14,
              height: 14,
              resizeMode: "contain",
            }}
          />
          <View>
            <Text style={styles.headerText}>{item.description}</Text>
          </View>
        </View>
        <View>
          <Text
            className=" font-ibold text-customwhite "
            style={{ fontSize: 12 }}
          >
            {item.subheader}
          </Text>
        </View>
        <View>
          {item.betOptions.map((options, index) => (
            <View key={index} style={styles.optionsContainer}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 6,
                    height: 6,
                    borderWidth: 1,
                    borderRadius: 6 / 2,
                    borderColor: "#AABAB9",
                  }}
                />
              </View>

              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  fontSize: 14,
                  color: "#AABAB9",
                }}
              >
                {options}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.rowGap8}>
          <View style={styles.oddsContainer}>
            <Text style={styles.odds}>
              {formatNumber(item.odds, item.oddtype)}
            </Text>
            <View style={styles.strikethrough} />
          </View>
          <Image
            source={icons.arrowboost}
            style={{ width: 14, height: 14, resizeMode: "contain" }}
          />
          <Text style={styles.oddsupdated}>
            {formatNumber(item.oddsupdated, item.oddtype)}
          </Text>
        </View>
      </View>
    </View>
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
  container: {
    minHeight: 197,
    minWidth: 260,
    borderWidth: 1,
    borderColor: "#325046",
    backgroundColor: "#1A2E2C", // will need to create the gradient
    margin: 5,
    borderRadius: 6,
    justifyContent: "space-between",
  },

  padCN: {
    padding: 20,
    gap: 13,
  },
  rowGap8: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },

  headerText: {
    fontSize: 14,
    color: "#fff",
  },

  // optionsContainer

  optionsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 5,
  },

  // button
  buttonContainer: {
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderColor: "#324B47",
  },

  // odds
  oddsContainer: {
    position: "relative",
  },
  strikethrough: {
    position: "absolute",
    top: "40%",
    left: 0,
    right: 0,
    height: 1,
    minWidth: 30,
    backgroundColor: "#A0AEAB",
    transform: [{ rotate: "15deg" }],
  },
  odds: {
    fontSize: 15,
    fontFamily: "Inter-Regular",
    color: "#AFC3C1",
  },
  oddsupdated: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Inter-Bold",
  },
});
export default SportsComponent;
