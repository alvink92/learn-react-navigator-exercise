import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Image } from "react-native";
import { DrawerNavigator } from "react-navigation";

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image style={[styles.icon, { tintColor: tintColor }]} />
    )
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Notifications",
    drawerIcon: ({ tintColor }) => (
      <Image style={[styles.icon, { tintColor: tintColor }]} />
    )
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});

export default (Home = DrawerNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Notifications: {
    screen: MyNotificationsScreen
  }
}));
