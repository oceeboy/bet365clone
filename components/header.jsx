import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { icons } from "../constants";

const HeaderBar = ({ onPress }) => {
  const checkState = () => {
    onPress();
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerBox}>
          <View style={styles.headerlogoContainer}>
            <View style={styles.headerlogo}>
              <Image
                resizeMode="contain"
                style={styles.headerlogoIcon}
                source={icons.headerlogo}
              />
            </View>
          </View>
          <View style={styles.headerleft}>
            <View style={styles.depositIconContainer}>
              <TouchableOpacity onPress={checkState}>
                <Text style={styles.depositIconText}>Deposit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={checkState}
                style={styles.depositIconBox}
              >
                <Image
                  resizeMode="contain"
                  style={styles.depositIcon}
                  source={icons.profileicon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  headerContainer: {
    height: 44,
    width: "100%",

    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  headerBox: {
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  headerlogoContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  headerleft: {
    position: "static",
    height: "100%",
    width: "100%",
    marginLeft: 0,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  depositIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  depositIconText: { fontSize: 12, color: "white", fontWeight: "bold" },
  depositIconBox: {
    height: 27,
    width: 27,
    justifyContent: "center",
    alignItems: "center",
  },
  depositIcon: { height: "100%", width: "100%" },
  headerlogo: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 20,
  },
  headerlogoIcon: {
    height: "90%",
    width: "90%",
  },
});
