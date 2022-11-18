import React from "react";
import { View, StyleSheet } from "react-native";

const SmallContainer = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: "red",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return <View style={styles.container}>{props.child}</View>;
};

export default SmallContainer;
