import { StyleSheet, Text, View } from "react-native";
import Record from "./Record";

export function RecordItem({ record }: { record: Record }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{record.title}</Text>
      <Text style={styles.date}>{record.date}</Text>
      <Text style={styles.description}>{record.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
});
