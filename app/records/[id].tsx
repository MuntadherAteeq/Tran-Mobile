import Header from "@/components/Header";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function RecordDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Header title="Record Details" showBack={true} />
      <Text>Record ID: {id}</Text>
    </View>
  );
}
