import { Stack, usePathname } from "expo-router";

export default function RecordsLayout() {
  const route = usePathname();

  return (
    <Stack.Screen
      name="[id]"
      options={{
        title: "Record Details",
      }}
    />
  );
}
