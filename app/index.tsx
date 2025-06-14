import { CurvedNavBar } from "@/components/CurvedNavBar";
import HistoryTab from "@/components/Tabs/HistoryTab";
import { HomeTab } from "@/components/Tabs/HomeTab";
import PocketTab from "@/components/Tabs/PocketTab";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { router } from "expo-router";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

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
        <CurvedNavBar
          onUserPress={() => console.log("User Pressed")}
          onPlusPress={() => router.push("/add-record")}
          onSettingsPress={() => console.log("Settings Pressed")}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
