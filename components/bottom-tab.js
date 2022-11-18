import React from "react";
import { StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CityScreen from "../pages/city-screen";
import LatLongScreen from "../pages/latlong-screen";
import Icon from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const headerTintColor = "black";
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="City"
        component={CityScreen}
        options={{
          title: "City",
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
            return (
              <Text style={{ fontSize: 12, color: focused ? "black" : "grey" }}>
                City
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="LatLong"
        component={LatLongScreen}
        options={{
          headerTitle: "Latitude, Longitude",
          headerStyle: styles.headerStyle,
          headerTintColor: headerTintColor,
          title: "LatLong",
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
            return (
              <Text style={{ fontSize: 12, color: focused ? "black" : "grey" }}>
                LatLong
              </Text>
            );
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
