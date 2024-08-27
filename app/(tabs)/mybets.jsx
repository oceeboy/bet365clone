import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuBar from "../../components/MenuBar"; // Assuming MenuBar is set up correctly
import TickeCard from "../../modules/mybets/components/TicketCard";
import EmptyCard from "../../modules/mybets/components/EmptyCard";

const MyBetsPage = () => {
  const [title, setTitle] = useState("Cash Out");

  const clickedOn = (selected) => {
    setTitle(selected);
  };
  const empTitle = "There are currently no bets to display";

  const renderContent = () => {
    switch (title) {
      case "Cash Out":
        return (
          <View style={styles.betContainer}>
            <EmptyCard
              title={empTitle}
              description="Bets that can be fully or partially cashed out appear here"
            />
          </View>
        );
      case "Live Now":
        return (
          <View style={styles.betContainer}>
            <EmptyCard
              title={empTitle}
              description="Bets that are In-Play will appear here"
            />
          </View>
        );
      case "Unsettled":
        return (
          <View style={styles.betContainer}>
            <EmptyCard
              title={empTitle}
              description="Bets that are unsettled will appear here"
            />
          </View>
        );
      case "Settled":
        return (
          <View>
            <TickeCard />
          </View>
        );
      case "All":
        return (
          <View style={styles.betContainer}>
            <EmptyCard
              title={empTitle}
              description="Bets appear here for 24 hours older bets can be viewed in your Account History"
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>My Bets</Text>
      </View>
      <View style={styles.menuBar}>
        <MenuBar title={title} clicked={clickedOn} />
      </View>
      <View style={styles.TicketContainer}>{renderContent()}</View>
    </SafeAreaView>
  );
};

export default MyBetsPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#282828",
  },
  sectionTitleContainer: {
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginTop: 27,
  },
  sectionTitle: { fontSize: 25, color: "#fff", fontFamily: "Inter-Bold" },
  menuBar: { marginHorizontal: 15, marginTop: 32 },
  TicketContainer: { marginHorizontal: 10, marginTop: 18 },
});
