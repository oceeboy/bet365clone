import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <View className={`${otherStyles}`}>
      <View style={styles.textInputContainer}>
        <TextInput
          className="flex-1"
          value={value}
          style={{ fontSize: 15 }}
          placeholder={placeholder}
          placeholderTextColor="#666666"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title == "Password" && value.length > 0 && (
          <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
            <Image
              source={icons.eye}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  textInputContainer: {
    width: "100%",
    height: 43,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#C3C3C3",
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 10,
    alignItems: "baseline",
    flexDirection: "row",
    alignItems: "center",
  },
});
