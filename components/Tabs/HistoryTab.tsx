import { ThemedView } from "../ThemedView";

export default function HistoryTab() {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ThemedView
        style={{
          width: 100,
          height: 100,
          backgroundColor: "lightblue",
          borderRadius: 10,
        }}
      ></ThemedView>
    </ThemedView>
  );
}
