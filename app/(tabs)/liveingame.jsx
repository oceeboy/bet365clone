import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LiveInGamePage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <ActivityIndicator color="green" size="large" />
      </View>
    </SafeAreaView>
  );
};

export default LiveInGamePage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282828",
  },
});
