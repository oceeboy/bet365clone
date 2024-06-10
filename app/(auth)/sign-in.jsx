import {
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import FormField from "../../components/FormField";
import CustomButton from "../../components/cutombutton";
import { signIn } from "../../lib/appwrite";
import { router, Link, Redirect } from "expo-router";
import { icons } from "../../constants";

const SignIn = ({ toggle }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "please fill in the field");
    }
    setIsSubmitting(true);
    try {
      await signIn(form.email, form.password);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  const changeForm = () => {
    router.push("/sign-up");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <View style={styles.headerSection}>
          <View>
            <TouchableOpacity
              onPress={changeForm}
              style={styles.headerContainer}
            >
              <Text style={styles.headerContainerText} className="text-center">
                Join
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.headerLogoContainer}>
              <Image
                resizeMode="contain"
                source={icons.headerloginlogo}
                style={styles.headerLogo}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.headerModalClose}>
              <Image
                source={icons.loginmodalclosebttn}
                resizeMode="contain"
                style={styles.headerCloseLogo}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.signInContainer}>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-2"
            keyboardType="email-address"
            placeholder="Email Address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-2"
            placeholder={"Password"}
          />
          <CustomButton
            containerStyles="mt-2"
            title="Log In"
            handlePress={submit}
            isLoading={isSubmitting}
          />
        </View>
        <View style={styles.cautionContainer}>
          <Text style={styles.cautionText}> Having trouble logging in?</Text>
          <Text style={styles.cautionGamble}>
            If you or someone you know has a gambling problem and wants help,
            call{" "}
            <Link
              href="/sign-in"
              className="text-xm font-pregular text-green-800"
            >
              1-800 GAMBLER
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerSection: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    height: 50,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 14,
    backgroundColor: "#CECECE",
  },
  headerContainer: {
    display: "flex",
    height: 24,
    width: 58,
    borderWidth: 1.2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#979797",
    borderRadius: 5,
  },
  headerModalClose: {
    display: "flex",
    height: 24,
    width: 58,

    justifyContent: "center",
    alignItems: "center",
  },
  headerContainerText: {
    fontSize: 12,
    color: "#494949",
    fontWeight: "600",
  },
  headerLogoContainer: {
    width: 84,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  headerLogo: {
    height: 20,
    width: 84,
  },
  headerCloseLogo: {
    width: 13,
    height: 13,
  },
  signInContainer: {
    paddingHorizontal: 10,
  },
  cautionContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cautionText: {
    fontSize: 13,
    color: "#494949",
    textAlign: "center",
  },
  cautionGamble: {
    marginTop: 5,
    fontSize: 11,
    color: "#494949",
    textAlign: "center",
  },
});
