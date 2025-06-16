import { CurvedNavBar } from "@/components/CurvedNavBar";
import HistoryTab from "@/components/Tabs/HistoryTab";
import { HomeTab } from "@/components/Tabs/HomeTab";
import PocketTab from "@/components/Tabs/PocketTab";
import { useColors } from "@/hooks/useThemeColor";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  const colors = useColors();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarScrollEnabled: false,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.subText,
            tabBarIndicatorStyle: {
              backgroundColor: colors.primary,
              height: 3,
            },
            tabBarStyle: {
              backgroundColor: colors.card,
              borderBottomWidth: 0,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 4 }, // increased height
              shadowOpacity: 1, // increased opacity
              shadowRadius: 6, // increased radius for more blur
              elevation: 8, // for Android shadow
            },
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
    </>
  );
}
