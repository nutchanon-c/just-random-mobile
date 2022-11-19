import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon6 from "react-native-vector-icons/FontAwesome6";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/FontAwesome";
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
    <Tab.Navigator style={styles.tabStyle}>
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
              <Icon5
                name="dice"
                color={focused ? "black" : "grey"}
                size={size}
              />
            );
          },
          tabBarLabel: ({ focused, color, size }) => {
            return <></>;
          },
          tabBarActiveBackgroundColor: "white",
          tabBarInactiveBackgroundColor: "black",
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
              <Icon5
                name="bitcoin"
                color={focused ? "black" : "grey"}
                size={size}
              />
            );
          },
          tabBarLabel: ({ focused, color, size }) => {
            return <></>;
          },
          tabBarActiveBackgroundColor: "white",
          tabBarInactiveBackgroundColor: "black",
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
              <Icon5
                name="heart"
                color={focused ? "black" : "grey"}
                size={size}
              />
            );
          },
          tabBarLabel: ({ focused, color, size }) => {
            return <></>;
          },
          tabBarActiveBackgroundColor: "white",
          tabBarInactiveBackgroundColor: "black",
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
                name="sort-numeric-asc"
                color={focused ? "black" : "grey"}
                size={size}
              />
            );
          },
          tabBarLabel: ({ focused, color, size }) => {
            return <></>;
          },
          tabBarActiveBackgroundColor: "white",
          tabBarInactiveBackgroundColor: "black",
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
                name="list"
                color={focused ? "black" : "grey"}
                size={size}
              />
            );
          },
          tabBarLabel: ({ focused, color, size }) => {
            return <></>;
          },
          tabBarActiveBackgroundColor: "white",
          tabBarInactiveBackgroundColor: "black",
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
                name="check"
                color={focused ? "black" : "grey"}
                size={size}
              />
            );
          },
          tabBarLabel: ({ focused, color, size }) => {
            return <></>;
          },
          tabBarActiveBackgroundColor: "white",
          tabBarInactiveBackgroundColor: "black",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "orange",
    height: 80,
  },
  tabStyle: {
    backgroundColor: "orange",
  },
});
