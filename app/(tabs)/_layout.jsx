import { View, Text, Image, StyleSheet } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";
import { betBalance, ticketInfo } from "../../modules/mybets/constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.tabIconBox}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={
          name === "Home"
            ? styles.tabiconImageHome
            : name === "Sports"
            ? styles.tabiconImageSport
            : name === "Live In Game"
            ? styles.tabiconImageLiveInGame
            : name === "My Bets"
            ? styles.tabiconImageMyBets
            : name === "Casino"
            ? styles.tabiconImageCasino
            : styles.tabiconImageDefault
        }
      />
      <Text // nene to chage to Inter semibold and Regular
        className={`${focused ? "font-ibold" : "font-iregular"} text-xs`}
        style={
          focused === true
            ? styles.tabIconTextActive
            : styles.tabIconTextInActive
        }
      >
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabiconImageHome: {
    width: 20,
    height: 22,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  tabiconImageSport: {
    width: 22,
    height: 22,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 50,
    // borderWidth: 1,
    // borderColor: "#151515",
  },
  tabiconImageLiveInGame: {
    width: 38,
    height: 22,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,

    // borderRadius: 50,
    // borderWidth: 1,
    // borderColor: "#DDDDDD",
  },
  tabiconImageMyBets: {
    width: 22,
    height: 22,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  tabiconImageCasino: {
    width: 27,
    height: 22,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  tabiconImageDefault: {
    width: 22,
    height: 22,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  tabIconBox: {
    gap: 5,
    paddingHorizontal: 5,
    paddingTop: 5,
    // backgroundColor: "#007C59",
    justifyContent: "center",
    alignItems: "center",
  },
  tabIconTextActive: {
    color: "#007C59",
    fontSize: 10,
    fontWeight: "bold",
  },
  tabIconTextInActive: {
    color: "#545454",
    fontSize: 10,
  },
});

//
const screenOptions = {
  headerBackground: "black",
  tabBarShowLabel: false,
  headerShown: false,
  tabBarActiveTintColor: "#007C59",
  tabBarInactiveTintColor: "#545454",

  tabBarStyle: {
    backgroundColor: "#DDDDDD",
    height: 80,
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    zindex: 1,
  },
};
// rember to try a zindex because of the modals ocee
const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={screenOptions} style={{ gap: 2 }}>
        <Tabs.Screen
          name="home"
          options={{
            title: "home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={focused === true ? icons.home : icons.inactivehome}
                color={color}
                name={betBalance.balance}
                focused={focused}
              />
            ),
          }}
        />

        {/* sport  */}

        <Tabs.Screen
          name="sports"
          options={{
            title: "sports",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={focused === true ? icons.activesports : icons.sports}
                color={color}
                name="Sports"
                focused={focused}
              />
            ),
          }}
        />
        {/* livegame */}
        <Tabs.Screen
          name="liveingame"
          options={{
            title: "liveingame",
            headerBackground: "black",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={
                  focused === true ? icons.activeliveingame : icons.liveingame
                }
                color={color}
                name="Live In Game"
                focused={focused}
              />
            ),
          }}
        />

        {/*  mybets */}
        <Tabs.Screen
          name="mybets"
          options={{
            title: "mybets",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View>
                <TabIcon
                  icon={focused === true ? icons.activemybets : icons.mybets}
                  color={color}
                  name="My Bets"
                  focused={focused}
                />
                {ticketInfo.stats === "cashout" && (
                  <View style={{ position: "absolute", right: -2 }}>
                    <View
                      style={{
                        backgroundColor: "#009B6D",
                        width: 12,
                        height: 12,
                        borderRadius: 12 / 2,
                        paddingHorizontal: 2,
                        paddingVertical: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: "Inter-Light",
                          color: "white",
                        }}
                      >
                        1
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            ),
          }}
        />

        {/* casino */}

        <Tabs.Screen
          name="casino"
          options={{
            title: "casino",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={focused === true ? icons.activecasino : icons.casino}
                color={color}
                name="Casino"
                focused={focused}
              />
            ),
          }}
        />
        {/*  */}
      </Tabs>
    </>
  );
};

export default TabsLayout;
