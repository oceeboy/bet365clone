import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { icons } from "../../constants";

const GameitemSub = () => {
  return (
    <>
      <ScrollView
        style={{
          gap: 10,
          display: "flex",
          flexDirection: "row",
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", gap: 10, marginHorizontal: 10 }}>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageContainer}
                resizeMode="contain"
                source={icons.nhl}
              />
              <Text style={styles.textContainer}>NHL</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageContainer}
                resizeMode="contain"
                source={icons.mets}
              />
              <Text style={styles.textContainer}>Mets</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageContainer}
                resizeMode="contain"
                source={icons.phillies}
              />
              <Text style={styles.textContainer}>Phillies</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageContainer}
                resizeMode="contain"
                source={icons.franceflag}
              />
              <Text style={styles.textContainer}>French Open Woman</Text>
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
                source={icons.streaming}
              />
              <Text style={styles.textContainer}>Streaming</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageContainer}
                resizeMode="contain"
                source={icons.criket}
              />
              <Text style={styles.textContainer}>T20 World Cup</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default GameitemSub;

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
