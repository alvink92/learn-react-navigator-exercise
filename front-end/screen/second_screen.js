import React from "react";
import { Text, View, Button, Image } from "react-native";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class SecondScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Screen 2",
    drawerIcon: ({ tintColor }) => {
      return <Text>S2 Icon</Text>;
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30, color: "green" }}>Screen 2</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          title="Back to Screen 1"
        />
      </View>
    );
  }
}
