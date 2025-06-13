import HistoryTab from "@/components/Tabs/HistoryTab";
import PocketTab from "@/components/Tabs/PocketTab";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { HomeTab } from "../components/Tabs/HomeTab";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarScrollEnabled: false,
            tabBarActiveTintColor: "#007AFF",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeTab} />
          <Tab.Screen name="History" component={HistoryTab} />
          <Tab.Screen name="Pocket" component={PocketTab} />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
