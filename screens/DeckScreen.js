import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DeckScreen = () => (
  <View style={styles.container}>
    <Text>DeckScreen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default DeckScreen;
