/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/Colors";
import {
  useColorScheme,
  useColorScheme as useRNColorScheme,
} from "react-native";

// Type for the color variables object
export type ColorsVariables = typeof Colors.light;

/**
 * useThemeColors - returns the color variables object for the current color scheme
 * @returns ColorsVariables (object with all color keys)
 */
export function useColors(): ColorsVariables {
  const colorScheme = useRNColorScheme();
  return Colors[colorScheme === "dark" ? "dark" : "light"];
}

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
