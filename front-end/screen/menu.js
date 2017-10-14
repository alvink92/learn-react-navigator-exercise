import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Image } from "react-native";

class Menu extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text> Menu</Text>
        <Button
          onPress={() => navigate("Preferences", {})}
          title="Preferences"
        />
      </View>
    );
  }
}

export default Menu;
