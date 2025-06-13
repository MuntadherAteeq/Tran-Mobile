import { useColors } from "@/hooks/useThemeColor";
import { Link } from "expo-router";
import React from "react";
import { FlatList } from "react-native";
import { records } from "../Records/Record";
import RecordListItem from "../Records/Record-List-Item";

// Home Screen Component
export function HomeTab() {
  const colors = useColors();
  return (
    <FlatList
      data={records}
      keyExtractor={(item) => item.id}
      style={{ backgroundColor: colors.background }}
      renderItem={({ item }) => (
        <>
          <Link href={`/records/${item.id}`}>
            <RecordListItem record={item} />
          </Link>
        </>
      )}
    />
  );
}
