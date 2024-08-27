import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";

import HeaderBar from "../../components/header";
import { StatusBar } from "expo-status-bar";
import CarouselComp from "../../components/carousel";
import React, { useState } from "react";
import GameCategory from "../../components/gameCategory";
import { Provider as PaperProvider } from "react-native-paper";

import { SplashScreen, Stack } from "expo-router";
import SportContent from "../../components/SportContent";
import BannerWelcome from "../../modules/home/components/BannerWelcome";
SplashScreen.preventAutoHideAsync();
const HomePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={{ marginTop: 0 }}>
        <HeaderBar onPress={openModal} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "#383838",
        }}
      >
        <View style={{ marginBottom: 10 }}>
          {
            <BannerWelcome />

            /* <CarouselComp /> */
          }
        </View>
        <View style={{ marginTop: 10 }}>
          <GameCategory />
        </View>
        <View style={{ marginTop: 10 }}>
          <PaperProvider>
            <SportContent />
          </PaperProvider>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <TouchableOpacity
            style={{
              height: 24,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 20,
              marginTop: 100,
            }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text>close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,

    backgroundColor: "#007C59",
  },
  switchMainContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  switchContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 5,
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
  componentContainer: {
    marginTop: 16,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  component: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
});
