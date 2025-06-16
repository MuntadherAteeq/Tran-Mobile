import { Stack, usePathname } from "expo-router";

export default function RecordsLayout() {
  const route = usePathname();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
