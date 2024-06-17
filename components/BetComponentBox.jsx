import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { images, icons } from "../constants";

const { width } = Dimensions.get("window");

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
              position: "relative",
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
            {/* <View
              style={{
                height: "30%",
                width: "100%",
                opacity: 50,
                position: "absolute",
                bottom: 0,
              }}
            >
              <LinearGradient
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "visible",
                  opacity: 50,
                }}
                colors={["rgba(55, 45, 40, 0.5)", "#2E2A29"]}
                start={{ x: -0.09, y: -0.75 }}
                end={{ x: 1.3, y: 0.48 }}
              />
            </View> */}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    width: width,
  },
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
export default BetComponentBox;
