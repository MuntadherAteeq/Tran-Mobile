/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export type Colors = typeof root;

export const root = {
  text: "#11181C",
  subText: "#687076",
  background: "#f2f2f2",
  foreground: "#fff",
  icon: "#687076",
  primary: "#0072A5",
  card: "#fff",
  border: "#E0E0E0",
  input: "#F2F2F2",
};

export const Colors: { [key: string]: Colors } = {
  light: {
    ...root,
    text: "#000",
    background: "#f2f2f2",
    icon: "#687076",
    card: "#fff",
    border: "#303030",
  },
  dark: {
    ...root,
    text: "#ECEDEE",
    background: "#1C1C1C",
    icon: "#9BA1A6",
    card: "#2B2B2B",
    border: "#2C2F33",
    subText: "#A0A3A7",
    input: "#2C2F33",
  },
};
