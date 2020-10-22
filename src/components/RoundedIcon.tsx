import React, { FC } from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Theme, Text } from "./Theme";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio?: number;
}

const RoundedIcon: FC<RoundedIconProps> = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
}) => {
  const iconSize = size * iconRatio;

  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      marginRight="s"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon size={iconSize} {...{ name }} />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
};

export default RoundedIcon;
