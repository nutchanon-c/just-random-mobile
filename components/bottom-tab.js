import React from "react";
import { StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import CoinPage from "../screens/coin-page";
import DicePage from "../screens/dice-page";
import CardPage from "../screens/card-page";
import NumberPage from "../screens/number-page";
import YesNoPage from "../screens/yesno-page";
import ListPage from "../screens/list-page";

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const headerTintColor = "black";
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dice"
        component={DicePage}
        options={{
          headerTitle: "Dice Roll",
          headerStyle: styles.headerStyle,
          headerTintColor: headerTintColor,
          title: "Dice Roll",
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return (
              <Icon
                name="map"
                color={focused ? "#9fe2bf" : "grey"}
                size={size}
              />
            );
          },
          tabBarLabel: ({ focused, color, size }) => {
            return <></>;
          },
        }}
      />
      <Tab.Screen
        name="Coin"
        component={CoinPage}
        options={{
          title: "Coin Flip",
          headerStyle: styles.headerStyle,
          headerTintColor: headerTintColor,
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return (
              <Icon
                name="city"
                color={focused ? "#9fe2bf" : "grey"}
                size={size}
              />
            );
          },
          tabBarLabel: ({ focused, color, size }) => {
            return <></>;
          },
        }}
      />
      <Tab.Screen
        name="Card"
        component={CardPage}
        options={{
          headerTitle: "Random Card",
          headerStyle: styles.headerStyle,
          headerTintColor: headerTintColor,
          title: "Random Card",
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return (
              <Icon
                name="map"
                color={focused ? "#9fe2bf" : "grey"}
                size={size}
              />
            );
          },
          tabBarLabel: ({ focused, color, size }) => {
            return <></>;
          },
        }}
      />
      <Tab.Screen
        name="Number"
        component={NumberPage}
        options={{
          headerTitle: "Random Number",
          headerStyle: styles.headerStyle,
          headerTintColor: headerTintColor,
          title: "Random Number",
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return (
              <Icon
                name="map"
                color={focused ? "#9fe2bf" : "grey"}
                size={size}
              />
            );
          },
          tabBarLabel: ({ focused, color, size }) => {
            return <></>;
          },
        }}
      />
      <Tab.Screen
        name="List"
        component={ListPage}
        options={{
          headerTitle: "Random List",
          headerStyle: styles.headerStyle,
          headerTintColor: headerTintColor,
          title: "Random Number",
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return (
              <Icon
                name="map"
                color={focused ? "#9fe2bf" : "grey"}
                size={size}
              />
            );
          },
          tabBarLabel: ({ focused, color, size }) => {
            return <></>;
          },
        }}
      />
      <Tab.Screen
        name="Yes/No"
        component={YesNoPage}
        options={{
          headerTitle: "Yes/No",
          headerStyle: styles.headerStyle,
          headerTintColor: headerTintColor,
          title: "Random Number",
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return (
              <Icon
                name="map"
                color={focused ? "#9fe2bf" : "grey"}
                size={size}
              />
            );
          },
          tabBarLabel: ({ focused, color, size }) => {
            return <></>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "white",
    height: 80,
  },
});
