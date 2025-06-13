import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";

export default function NewRecordPage() {
  return (
    <View>
      <ThemedText style={{ fontSize: 24, fontWeight: "bold" }}>
        New Record Page
      </ThemedText>
      <ThemedText style={{ fontSize: 16, color: "#666", marginTop: 10 }}>
        This is where you can create a new record.
      </ThemedText>
    </View>
  );
}
