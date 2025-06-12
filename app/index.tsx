import { ThemedText as Text } from "@/components/ThemedText";
import { ThemedView as View } from "@/components/ThemedView";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarScrollEnabled: false,
            // tabBarIcon: ({ focused, color }) => {
            //   let iconName: keyof typeof MaterialIcons.glyphMap;
            //   switch (route.name) {
            //     case "Home":
            //       iconName = "home";
            //       break;
            //     case "Profile":
            //       iconName = "person";
            //       break;
            //     case "Settings":
            //       iconName = "settings";
            //       break;
            //     default:
            //       iconName = "help";
            //       break;
            //   }

            //   // You can return any component that you like here!
            //   return <MaterialIcons name={iconName} size={24} color={color} />;
            // },
            tabBarActiveTintColor: "#007AFF",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
// Home Screen Component
function HomeScreen() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Welcome to the Home tab</Text>
      <Text style={styles.description}>
        This is the main screen of your app. You can add your home content here.
      </Text>
    </View>
  );
}

// Profile Screen Component
function ProfileScreen() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>Your Profile Information</Text>
      <Text style={styles.description}>
        Here you can view and edit your profile details, settings, and
        preferences.
      </Text>
    </View>
  );
}

// Settings Screen Component
function SettingsScreen() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>App Configuration</Text>
      <Text style={styles.description}>
        Customize your app experience with various settings and options.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#007AFF",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#8E8E93",
    textAlign: "center",
    lineHeight: 24,
  },
});
