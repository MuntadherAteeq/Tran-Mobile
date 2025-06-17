import { useColors } from "@/hooks/useThemeColor";
import { Link } from "expo-router";
import React from "react";
import { FlatList } from "react-native";
import RecordListItem from "../Records/Record-List-Item";
import { useRecords } from "@/models/Record";

// Home Screen Component
export function HomeTab() {
  const colors = useColors();
  const { records } = useRecords();
  return (
    <FlatList
      data={records}
      renderItem={({ item }) => (
        <Link
          href={`/records/${item.id}`}
          style={{
            backgroundColor: colors.card,
            padding: 10,
            borderRadius: 8,
            marginVertical: 5,
          }}
        >
          <RecordListItem record={item} />
        </Link>
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 10 }}
    />
  );
}
