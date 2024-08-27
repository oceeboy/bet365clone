import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

const SportPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <ActivityIndicator color="green" size="large" />
      </View>
    </SafeAreaView>
  );
};

export default SportPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282828",
  },
});
