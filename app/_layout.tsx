import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="add-record"
          options={{ title: "Customer Information" }}
        />
        <Stack.Screen
          name="records/[id]"
          options={{
            title: "Record Details",
            headerShown: false,
            headerTitleStyle: {
              fontFamily: "SpaceMono",
              fontSize: 20,
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
