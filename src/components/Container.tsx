import React, { FC } from "react";
import { Image, Dimensions, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, useTheme } from "./Theme";

const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
export const assets = [require("../../assets/pattern1.png")];

interface ContainerProps {
  children: React.ReactNode;
  footer: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children, footer }) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}
        >
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          borderRadius="xl"
          borderTopLeftRadius={0}
          backgroundColor="white"
          flex={1}
        >
          {children}
        </Box>
      </Box>
      <Box backgroundColor="secondary" paddingTop="m">
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  );
};

export default Container;