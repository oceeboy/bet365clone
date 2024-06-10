import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { icons } from "../../constants";

const SportsCategory = () => {
  return (
    <>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", gap: 20, marginHorizontal: 10 }}>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.search}
              />
              <Text style={styles.textSports}>Search</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.basketball}
              />
              <Text style={styles.textSports}>Basketball</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.baseball}
              />
              <Text style={styles.textSports}>Baseball</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.hockey}
              />
              <Text style={styles.textSports}>Hockey</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.sportcasino}
              />
              <Text style={styles.textSports}>Casino</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.soocerball}
              />
              <Text style={styles.textSports}>Soccer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.tennis}
              />
              <Text style={styles.textSports}>Tennis</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.golf}
              />
              <Text style={styles.textSports}>Golf</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.dailylinesup}
              />
              <Text style={styles.textSports}>Daily Lineups</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.virtuals}
              />
              <Text style={styles.textSports}>Virtuals</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.blackjack}
              />
              <Text style={styles.textSports}>Blackjack</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.football}
              />
              <Text style={styles.textSports}>Football</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.mma}
              />
              <Text style={styles.textSports}>MMA</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.boxing}
              />
              <Text style={styles.textSports}>Boxing</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.darts}
              />
              <Text style={styles.textSports}>Darts</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.criket}
              />
              <Text style={styles.textSports}>Cricket</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.snooker}
              />
              <Text style={styles.textSports}>Snooker</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.nascarflag}
              />
              <Text style={styles.textSports}>NASCAR</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.nascarflag}
              />
              <Text style={styles.textSports}>Formula 1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.volleyball}
              />
              <Text style={styles.textSports}>Volleyball</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.container}>
              <Image
                style={styles.imageSports}
                resizeMode="contain"
                source={icons.rleague}
              />
              <Text style={styles.textSports}>R. League</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default SportsCategory;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    gap: 12,
  },
  imageSports: {
    height: 28,
    width: 28,
    alignItems: "center",
  },
  textSports: {
    fontSize: 15,
    fontWeight: "400",
    color: "white",
  },
});
