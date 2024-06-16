import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from "react-native";
import { images, icons } from "../constants";
import SportsComponent from "./sportsComponent";
import { LinearGradient } from "expo-linear-gradient";
import BetComponentBox from "./BetComponentBox";
import TicketInfoComponent from "./TicketInfoComponent";

const { width } = Dimensions.get("window");
const SportContent = () => {
  const [selectedOption, setSelectedOption] = useState("Sports");

  return (
    <View style={styles.container}>
      <View style={styles.switchMainContainer}>
        <TouchableOpacity
          style={[
            styles.switchContainer,
            selectedOption === "Sports" && styles.selected,
          ]}
          onPress={() => setSelectedOption("Sports")}
        >
          <View style={styles.contentContainer}>
            <Text
              style={[
                selectedOption === "Sports"
                  ? styles.textSelected
                  : styles.contentText,
              ]}
            >
              Sports
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.switchContainer,
            selectedOption === "Top Events" && styles.selected,
          ]}
          onPress={() => setSelectedOption("Top Events")}
        >
          <View style={styles.contentContainer}>
            <Text
              style={[
                selectedOption === "Top Events"
                  ? styles.textSelected
                  : styles.contentText,
              ]}
            >
              Top Events
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.componentContainer}>
        <View style={styles.headerComponentContainer}>
          <Image
            style={styles.headerImage}
            source={images.betboost}
            resizeMode="contain"
          />
        </View>

        {selectedOption === "Sports" && (
          <View>
            <View style={styles.component}>
              <SportsComponent />
            </View>
            {/* <View>
              <Text>west</Text>
            </View> */}
          </View>
        )}
        {selectedOption === "Top Events" && (
          <View style={styles.component2}>
            <Text>This is Component 2</Text>
          </View>
        )}
      </View>
      <View style={{ margin: 20 }} />
      {selectedOption === "Sports" && (
        <LinearGradient
          style={{
            width: width,
            height: 300,
            overflow: "visible",
          }}
          colors={["#4C3D36", "#383838"]}
          start={{ x: 0.25, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <BetComponentBox />
          <View
            style={{
              marginHorizontal: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <TicketInfoComponent />
          </View>
        </LinearGradient>
      )}
      {selectedOption === "Top Events" && (
        <View style={styles.component2}>
          <Text>This is Component 2</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  switchMainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
  },
  switchContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
  },
  selected: {
    backgroundColor: "#00FFB6",
  },
  contentContainer: {
    alignItems: "center",
  },
  contentText: {
    fontSize: 13,
    color: "#D4D4D4",
  },
  textSelected: {
    color: "black",
    fontWeight: "bold",
    fontSize: 13,
  },
  headerComponentContainer: {
    paddingVertical: 25,
    paddingLeft: 12,
  },
  componentContainer: {
    width: "100%",
    backgroundColor: "#1A4C40",
    paddingBottom: 25,
  },
  component: {
    width: width,
  },
  component2: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "white",
  },
  headerImage: { width: 125, height: 15 },
  componentBox: {
    position: "relative",
  },

  gameLinesBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    width: 105,
    height: 25,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 2.5,
  },
  gameLinesBoxImg: { width: 5, height: 8 },
  gameLinesBoxText: { fontWeight: "bold", color: "#DDDDDD", fontSize: 12 },
});

export default SportContent;
