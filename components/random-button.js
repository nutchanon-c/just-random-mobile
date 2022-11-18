import React from "react";
import { Button, StyleSheet, TouchableOpacity, Text, View } from "react-native";

const RandomButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "blue",
        width: 255,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: props.backgroundColor ?? "white",
        borderRadius: 5,
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          color: props.color ?? "black",
        }}
      >
        RANDOM
      </Text>
    </TouchableOpacity>
  );
};

export default RandomButton;
