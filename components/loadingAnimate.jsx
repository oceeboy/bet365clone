import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";
const LoadingAnimation = () => {
  const animations = useRef(
    [0, 1, 2, 3, 4].map(() => ({
      translateY: new Animated.Value(0),
      opacity: new Animated.Value(1),
    }))
  ).current;

  useEffect(() => {
    const createAnimation = (index) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animations[index].translateY, {
            toValue: -10,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(animations[index].translateY, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ).start();

      Animated.loop(
        Animated.sequence([
          Animated.timing(animations[index].opacity, {
            toValue: 0.5,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(animations[index].opacity, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animations.forEach((_, index) => {
      createAnimation(index);
    });
  }, [animations]);
  return (
    <View style={styles.container}>
      {animations.map((anim, index) => (
        <Animated.View
          key={index}
          style={[
            styles.rectangle,
            {
              transform: [{ translateY: anim.translateY }],
              opacity: anim.opacity,
            },
          ]}
        />
      ))}
    </View>
  );
};

export default LoadingAnimation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
  },
  rectangle: {
    width: 10,
    height: 10,
    backgroundColor: "#10D899",
    marginHorizontal: 5,
  },
});
