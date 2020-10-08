import React, { FC } from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";

const { width, height } = Dimensions.get("window");

export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    width,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  title: {
    lineHeight: 80,
    fontSize: 80,
    fontFamily: "SFProText-Bold",
    color: "white",
  },
});

interface SlideProps {
  title: string;
  right?: boolean;
  picture: number;
}

const Slide: FC<SlideProps> = ({ title, right, picture }) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={picture} style={styles.picture} />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
