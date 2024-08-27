import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TicketHeader from "./TicketHeader";
import TicketFooter from "./TicketFooter";
import TicketInfo from "./TicketInfo";
import { ticketInfo } from "../constants";

const { width } = Dimensions.get("screen");
const TickeCard = () => {
  const data = ticketInfo;

  return (
    <LinearGradient
      style={styles.ticketBody}
      colors={["#303D39", "#353535"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.ticketBody}>
        <View style={styles.headerContainer}>
          <TicketHeader
            wager={data.wager}
            type={data.type}
            returned={data.return}
          />
        </View>
        <View style={styles.ticketInfoContainer}>
          {data.ticketInfo.map((item, index) => (
            <TicketInfo
              key={index}
              team={item.teamInfo}
              odds={item.odds}
              bookings={item.bookingsInfo}
              selected={item.selectedInfo}
              oddtype={data.oddtype}
            />
          ))}
        </View>
        <View style={styles.footerContainer}>
          <TicketFooter wager={data.wager} returned={data.return} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: "#494B4A",
  },

  footerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderTopWidth: 1,
    borderTopColor: "#494B4A",
  },

  ticketInfoContainer: {
    paddingHorizontal: 15,
    paddingVertical: 11,
    gap: 30,
  },

  ticketBody: {
    height: "auto",

    borderRadius: 5.375,
  },

  gradient: {
    // You can add padding or any other styles here
  },
});

export default TickeCard;
