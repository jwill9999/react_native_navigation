import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WelcomeScreen = () => (
  <View style={styles.container}>
    <Text>WelcomeScreen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0000FF",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default WelcomeScreen;
