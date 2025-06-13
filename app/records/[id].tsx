import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function RecordDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Record ID: {id}</Text>
      {/* Fetch and display record details here */}
    </View>
  );
}
