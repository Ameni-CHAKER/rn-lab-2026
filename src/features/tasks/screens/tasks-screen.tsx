import { FlatList, StyleSheet, Text, View } from "react-native";

import { TaskCard } from "../components/task-card";
import { mockTasks } from "../data/mock-tasks";

export function TasksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Tasks</Text>

      <FlatList
        data={mockTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: "#292524",
    marginBottom: 20,
  },
  list: {
    gap: 12,
    paddingBottom: 24,
  },
});
