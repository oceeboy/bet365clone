import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Link, Redirect, router } from "expo-router";
import { icons } from "../constants";
import CustomButton from "../components/custombutton";
import { useGlobalContext } from "../context/GlobalProvider";
import { useState, useEffect } from "react";
import LoadingAnimation from "../components/loadingAnimate";

export default function App() {
  const actionText = () => {
    router.push("/home");
  };

  const { isLoading, isLoggedIn } = useGlobalContext();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      const timer = setTimeout(() => setRedirect(true), 1000);
      return () => clearTimeout(timer); // Clear the timeout if the component unmounts or dependencies change
    }
  }, [isLoading, isLoggedIn]);

  if (redirect) {
    return <Redirect href="/home" />;
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View className=" h-full  items-center justify-center">
        <Image source={icons.betmainlogo} />
        <View style={{ marginTop: 30 }}>
          <StatusBar style="inverted" />
          {/* <Link href={"/home "} className="text-2xl font-psemibold  text-green-500">
        {" "}
        Be thrilled
      </Link> */}
          <TouchableOpacity onPress={actionText} className="mt-10">
            <LoadingAnimation />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#126E51",
  },
});
