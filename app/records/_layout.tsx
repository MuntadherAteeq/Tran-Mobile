import Header from "@/components/Header";
import { Stack, usePathname } from "expo-router";

export default function RecordsLayout() {
  const route = usePathname();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
