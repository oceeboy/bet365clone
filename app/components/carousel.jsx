import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
} from "react-native";

import Banner from "./Banner";
import { images } from "../../constants";
import React, { useState, useRef } from "react";

const { width } = Dimensions.get("window");

const CarouselComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleScrollEnd = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const DATA = [
    {
      id: 1,
      categoryname: "New Customers",
      categorycontent:
        "Open an account & choose between two incredible offers!",
      buttonholder: "Join Us",
      image: images.openanaccountnow,
    },
    {
      id: 2,
      categoryname: "Parlay Boost",
      categorycontent: "BOOST your parlays by up to 70% NBA, MLB, NHL & more",
      buttonholder: "Bet Now",
      image: images.basketballbgimage,
    },
    {
      id: 3,
      categoryname: "MMA Same Game Parlay",
      categorycontent: "Create & combine your own SGPs on UFC 302",
      buttonholder: "Bet Now",
      image: images.mmasamegame,
    },
    {
      id: 4,
      categoryname: "T20 World Cup 2024",
      categorycontent: "Get a 30% Profit Boost on your World Cup winner",
      buttonholder: "Bet Now",
      image: images.mlbearlypayout,
    },
    {
      id: 5,
      categoryname: "MLB Early Payout Offer",
      categorycontent:
        "Instant payout on EVERY game if your team goes 5 up, including parlays & SGP!",
      buttonholder: "Bet Now",
      image: images.pbbBaseball,
    },
    {
      id: 6,
      categoryname: "Same Game Parlay +",
      categorycontent:
        "The biggest games, the most popular markets, all in one place!",
      buttonholder: "Bet Now",
      image: images.SameGameParlayPlus,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        horizontal
        pagingEnabled
        snapToInterval={width} // This will make the snapping effect
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
        renderItem={({ item }) => (
          <Banner
            id={item.id}
            title={item.categoryname}
            text={item.categorycontent}
            image={item.image}
            buttonholder={item.buttonholder}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={6}
        ref={flatListRef}
      />
      <View
        style={{
          width: width,
          justifyContent: "center",
          alignItems: "center",
          marginTop: -10,
        }}
      >
        <View style={styles.indicatorContainer}>
          {DATA.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                { opacity: index === currentIndex ? 1 : 0.3 },
              ]}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CarouselComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    position: "absolute",
    width: width,
  },
  indicator: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
});
