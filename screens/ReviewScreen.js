import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ReviewScreen = () => (
  <View style={styles.container}>
    <Text>ReviewScreen</Text>
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

export default ReviewScreen;
