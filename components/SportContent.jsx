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
import SportsComponent from "../app/components/sportsComponent";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");
const SportContent = () => {
  const [selectedOption, setSelectedOption] = useState("Sports");

  const BetComponentBox = () => {
    return (
      <View style={styles.component}>
        <View style={styles.componentBox}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginHorizontal: 10,
              marginTop: 40,
              zIndex: 1,
            }}
          >
            <View style={{ flexDirection: "column", gap: 8 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#EDECEB",
                }}
              >
                Baseball
              </Text>
              <Text
                style={{
                  fontSize: 22.06,
                  fontWeight: "bold",
                  color: "#EDB08D",
                  letterSpacing: 1,
                }}
              >
                MLB
              </Text>
            </View>

            <TouchableOpacity style={styles.gameLinesBox}>
              <Text style={styles.gameLinesBoxText}>Game Lines</Text>
              <Image
                style={styles.gameLinesBoxImg}
                source={icons.arrowright}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "absolute",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              width: width,
              top: -10,
              left: 11,
            }}
          >
            <View
              style={{
                width: 190,
                height: 175,

                justifyContent: "flex-start",
                alignItems: "center",
                overflow: "hidden",
                marginLeft: 10,
              }}
            >
              <Image
                style={{ width: 201, height: 250 }}
                source={images.baseballplayer}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const TicketInfoComponent = () => {
    return (
      <>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: width,
            height: 200,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: "20" }}>
            betInfo FlatList to be render
          </Text>
        </View>
      </>
    );
  };

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
          <TicketInfoComponent />
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
