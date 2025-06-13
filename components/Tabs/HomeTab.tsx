import { ThemedView as View } from "@/components/ThemedView";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

// Home Screen Component
export function HomeTab() {
  const data = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
  ];

  return (
    <View style={styles.content}>
      <Link href={"/NewRecord"}>NewRecord</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    width: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#007AFF",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#8E8E93",
    textAlign: "center",
    lineHeight: 24,
  },
});
