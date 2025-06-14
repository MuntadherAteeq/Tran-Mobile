import { useColors } from "@/hooks/useThemeColor";
import { Plus, Settings, User } from "lucide-react-native";
import React from "react";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedView } from "./ThemedView";

interface CurvedNavBarProps {
  onUserPress?: () => void;
  onPlusPress?: () => void;
  onSettingsPress?: () => void;
}

export const CurvedNavBar: React.FC<CurvedNavBarProps> = ({
  onUserPress,
  onPlusPress,
  onSettingsPress,
}) => {
  const colors = useColors();

  return (
    <ThemedView style={{ height: 72 }}>
      <ThemedView style={{ ...styles.container, backgroundColor: colors.card }}>
        <TouchableOpacity style={styles.iconButton} onPress={onUserPress}>
          <Settings color={colors.icon} size={28} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.plusButton} onPress={onPlusPress}>
          <View style={[styles.circle, { backgroundColor: colors.tint }]}>
            <Plus color={colors.background} size={32} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={onSettingsPress}>
          <User color={colors.icon} size={28} />
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingBottom: Platform.OS === "ios" ? 24 : 12,
    paddingTop: 8,
    height: 72,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  iconButton: {
    flex: 1,
    alignItems: "center",
  },
  plusButton: {
    flex: 1,
    alignItems: "center",
    marginTop: -28,
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
});
