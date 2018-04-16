import React from "react";
import { View, Text } from "react-native";
import { TabNavigator } from "react-navigation";

import HomeScreen from "./screens/WelcomeScreen";
import AuthScreen from "./screens/AuthScreen";

const RootStack = TabNavigator({
  Home: {
    screen: HomeScreen
  },
  Login: {
    screen: AuthScreen
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
