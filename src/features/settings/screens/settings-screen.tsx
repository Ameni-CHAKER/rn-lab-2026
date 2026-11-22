import { StyleSheet, Text, View } from "react-native";

export function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <Text style={styles.description}>
        App preferences will be implemented in a future ticket.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: "#292524",
  },
  description: {
    marginTop: 16,
    fontSize: 16,
    color: "#57534E",
  },
});
