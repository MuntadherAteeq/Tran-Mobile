import { FlatList } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

export default function PocketTab() {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <FlatList
        data={[{ id: "1" }, { id: "2" }, { id: "3" }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ThemedView
            style={{
              height: 100,
              borderRadius: 10,
              margin: 10,
            }}
          >
            <ThemedText style={{ padding: 10 }}>Item {item.id}</ThemedText>
          </ThemedView>
        )}
        style={{
          width: "100%",
          height: 100,
          backgroundColor: "lightblue",
          borderRadius: 10,
        }}
      ></FlatList>
    </ThemedView>
  );
}
