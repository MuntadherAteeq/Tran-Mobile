import { Transaction } from "@/models/Transaction";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const TransactionItem = ({
  transaction,
}: {
  transaction: Transaction;
}) => {
  const { id, amount, description, date } = transaction;
  const isPositive = amount >= 0;

  // Format price with proper sign and currency
  const formatPrice = (amount: number) => {
    const sign = amount >= 0 ? "+" : "";
    return `${sign}$${amount.toFixed(2)}`;
  };

  // Format date to show time like WhatsApp
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const transactionDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    if (transactionDate.getTime() === today.getTime()) {
      // Today - show time
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (transactionDate.getTime() === today.getTime() - 86400000) {
      // Yesterday
      return "Yesterday";
    } else {
      // Other dates - show date
      return date.toLocaleDateString([], { month: "short", day: "numeric" });
    }
  };

  return (
    <View
      style={[
        styles.container,
        { borderLeftColor: isPositive ? "#10B981" : "#EF4444" },
      ]}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text
            style={[
              styles.price,
              { color: isPositive ? "#10B981" : "#EF4444" },
            ]}
          >
            {formatPrice(amount)}
          </Text>
          <Text style={styles.date}>{formatDate(date)}</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderLeftWidth: 4,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 6,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
    flex: 1,
  },
  date: {
    fontSize: 11,
    color: "#6B7280",
    fontWeight: "500",
    marginLeft: 8,
    marginTop: 2,
  },
  description: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
    fontWeight: "400",
  },
});
