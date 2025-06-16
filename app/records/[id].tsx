import Header from "@/components/Header";
import { Text, View } from "@/components/UI";
import { useColors } from "@/hooks/useThemeColor";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RecordDetailScreen() {
  const { id } = useLocalSearchParams();
  const colors = useColors();

  return (
    <SafeAreaView>
      <View style={{ flex: 1, backgroundColor: colors.card }}>
        <Header />
        <Text>Record ID: {id}</Text>
      </View>
    </SafeAreaView>
  );
}
