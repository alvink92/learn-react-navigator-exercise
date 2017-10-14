/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Button, Text, Platform, ScrollView, StyleSheet } from "react-native";
import { DrawerNavigator } from "react-navigation";
// import Home from "./front-end/components/home";
import FirstScreen from "./front-end/screen/first_screen";
import SecondScreen from "./front-end/screen/second_screen";
import Menu from "./front-end/screen/menu";

const DrawerExample = DrawerNavigator(
  {
    Home: {
      path: "/",
      screen: FirstScreen
    },
    Preferences: {
      path: "/sent",
      screen: SecondScreen
    }
  },
  { contentComponent: props => <Menu {...props} /> }
);

export default DrawerExample;
