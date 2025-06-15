import { FlatList } from "react-native";
import { Text, View } from "../UI";

export default function PocketTab() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={[{ id: "1" }, { id: "2" }, { id: "3" }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              height: 100,
              borderRadius: 10,
              margin: 10,
            }}
          >
            <Text style={{ padding: 10 }}>Item {item.id}</Text>
          </View>
        )}
        style={{
          width: "100%",
          height: 100,
          backgroundColor: "lightblue",
          borderRadius: 10,
        }}
      ></FlatList>
    </View>
  );
}
