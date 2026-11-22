import { StyleSheet, Text, View } from "react-native";

import type { Task } from "../types";

type TaskCardProps = {
  task: Task;
};

export function TaskCard({ task }: TaskCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.status}>Status: {task.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E7E5E4",
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#292524",
  },
  description: {
    fontSize: 14,
    color: "#57534E",
  },
  status: {
    fontSize: 12,
    color: "#78716C",
  },
});
