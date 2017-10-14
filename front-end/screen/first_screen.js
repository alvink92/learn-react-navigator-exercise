import React from "react";
import { Text, View, Button, Image } from "react-native";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Screen 1",
    drawerIcon: ({ tintColor }) => {
      return (
        <View>
          <Text>BIKE ICON</Text>
        </View>
      );
    }
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate("DrawerOpen")}
        title="Open DrawNavigator"
      />
    );
  }
}
