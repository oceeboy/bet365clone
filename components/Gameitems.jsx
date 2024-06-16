import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { icons } from "../constants";

const Gameitems = () => {
  return (
    <>
      <ScrollView
        style={{ gap: 10, display: "flex", flexDirection: "row" }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", gap: 10, marginHorizontal: 10 }}>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageContainer}
                resizeMode="contain"
                source={icons.nba}
              />
              <Text style={styles.textContainer}>NBA Finals</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageContainer}
                resizeMode="contain"
                source={icons.mlb}
              />
              <Text style={styles.textContainer}>MLB</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageContainer}
                resizeMode="contain"
                source={icons.yankees}
              />
              <Text style={styles.textContainer}>Yankees</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageContainer}
                resizeMode="contain"
                source={icons.pgatour}
              />
              <Text style={styles.textContainer}>PGA TOUR</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageContainer}
                resizeMode="contain"
                source={icons.franceflag}
              />
              <Text style={styles.textContainer}>French Open</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageContainer}
                resizeMode="contain"
                source={icons.usaflag}
              />
              <Text style={styles.textContainer}>WNBA</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageContainer}
                resizeMode="contain"
                source={icons.nfl}
              />
              <Text style={styles.textContainer}>NFL</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Gameitems;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#464646",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  textContainer: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#ffff",
  },
  imageContainer: {
    height: 18,
    width: 18,
  },
});
