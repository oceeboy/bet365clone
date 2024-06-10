import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import React from "react";
import SportContent from "../../components/SportContent";

const SportPage = () => {
  return (
    <PaperProvider>
      <SportContent />
    </PaperProvider>
  );
};

export default SportPage;

const styles = StyleSheet.create({});
