import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BannerItem = () => {
  return (
    <View style={styles.container}>
      <Text>BannerItem</Text>
    </View>
  );
};

export default BannerItem;

const styles = StyleSheet.create({
  container: {
    minHeight: 200,
    minWidth: 340 / 2,
    borderRadius: 6,
    borderWidth: 1,
  },
});
