import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import styles from "./stylesBanner";

const { width } = Dimensions.get("window");
const Banner = ({ title, text, image, id, buttonholder }) => {
  const getCategoryContainerStyle = (id) => {
    switch (id) {
      case 1:
        return styles.categoryNameContainer1;
      case 2:
        return styles.categoryNameContainer2;
      case 3:
        return styles.categoryNameContainer3;
      case 4:
        return styles.categoryNameContainer4;
      case 5:
        return styles.categoryNameContainer5;
      default:
        return styles.categoryNameContainer;
    }
  };

  const getCategoryNameStyle = (id) => {
    switch (id) {
      case 1:
        return styles.categoryName1;
      case 2:
        return styles.categoryName2;
      case 3:
        return styles.categoryName3;
      case 4:
        return styles.categoryName4;
      case 5:
        return styles.categoryName5;
      default:
        return styles.categoryName;
    }
  };

  return (
    <>
      <View style={{ position: "static", width: width }}>
        <View style={styles.bannerContainer}>
          <View style={styles.rightContent}>
            <View style={getCategoryContainerStyle(id)}>
              <Text style={getCategoryNameStyle(id)}>{title}</Text>
            </View>
            <View style={styles.categoryBodyContainer}>
              <Text style={styles.categoryBodyText}>
                {/* BOOST your parlays by up to 70%! NBA, MLD, NHL & more */}
                {text}
              </Text>
            </View>
            <TouchableOpacity style={styles.categoryButtonContainer}>
              <Text style={styles.categoryButtonText}>{buttonholder}</Text>
            </TouchableOpacity>
            <View style={styles.categoryTermsContainer}>
              <Text style={styles.categoryTermsText}>T&Cs apply.</Text>
            </View>
          </View>
          <View style={styles.leftContent}>
            <Image
              style={styles.bannerImage}
              resizeMode="contain"
              source={image}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Banner;
