import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MenuBar = ({ title, clicked }) => {
  const menuItems = ["Cash Out", "Live Now", "Unsettled", "Settled", "All"];

  return (
    <View style={styles.menuContainer}>
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => clicked(item)}
          style={[
            styles.menuItem,
            title === item && styles.selectedItem, // Apply border if the item is selected
          ]}
        >
          <Text
            style={[styles.menuText, title === item && styles.selectedItemText]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MenuBar;

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  selectedItem: {
    backgroundColor: "#00FFAF",
    borderRadius: 20,
  },
  menuText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "Inter-Regular",
  },
  selectedItemText: {
    color: "#000",
    fontFamily: "Inter-Bold",
  },
});
