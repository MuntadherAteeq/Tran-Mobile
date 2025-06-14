/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export const root = {
  text: "#11181C",
  background: "#f2f2f2",
  tint: "#0a7ea4",
  icon: "#687076",
  tabIconDefault: "#687076",
  tabIconSelected: "#fff",
  primary: "#0a7ea4",
  card: "#fff",
  border: "#E0E0E0",
};

export const Colors: { [key: string]: typeof root } = {
  light: {
    ...root,
    text: "#000",
    background: "#f2f2f2",
    icon: "#687076",
    tabIconDefault: "#687076",
    // Add more colors as needed
    card: "#fff",
    border: "#E0E0E0",
  },
  dark: {
    ...root,
    text: "#ECEDEE",
    background: "#151718",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    card: "#0f0f0f",
    border: "#2C2F33",
  },
};
