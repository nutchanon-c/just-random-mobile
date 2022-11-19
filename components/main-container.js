import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MainContainer = (props) => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: "orange",
    },
    title: {
      alignSelf: "center",
      fontWeight: "bold",
      fontSize: 42,
    },
    childContainer: {
      backgroundColor: "black",
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text></Text>
      <Text style={styles.title}>JUST</Text>
      <Text style={styles.title}>RANDOM</Text>

      <View style={styles.childContainer}>{props.child}</View>
    </SafeAreaView>
  );
};

export default MainContainer;
