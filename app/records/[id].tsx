import Header from "@/components/Header";
import { TransactionItem } from "@/components/Transaction/Transaction_List_item";
import { View } from "@/components/UI";
import { useColors } from "@/hooks/useThemeColor";
import { Transaction } from "@/models/Transaction";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RecordDetailScreen() {
  const { id } = useLocalSearchParams();
  const colors = useColors();

  const [transactions, setTransactions] = useState<Transaction[]>([
    new Transaction({
      id: "1",
      amount: 100,
      description: "Payment for services",
      date: "2023-10-01T12:00:00Z",
      recordId: id as string,
    }),
    new Transaction({
      id: "2",
      amount: -50,
      description: "Refund for overpayment",
      date: "2023-10-02T14:30:00Z",
      recordId: id as string,
    }),
    new Transaction({
      id: "3",
      amount: 200,
      description: "Payment received",
      date: "2023-10-03T09:15:00Z",
      recordId: id as string,
    }),
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <Header />
        <FlatList
          data={transactions}
          renderItem={({ item }) => {
            return <TransactionItem transaction={item} />;
          }}
        />
        <TextInput value="tran" />
      </View>
    </SafeAreaView>
  );
}
