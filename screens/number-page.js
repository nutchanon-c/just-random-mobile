import React, { useState, useEffect } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import RandomButton from "../components/random-button";
import SmallContainer from "../components/small-container";
import api from "../utils/api";

const NumberPage = () => {
  const [result, setResult] = useState(null);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(`result: ${result}`);
  }, [result]);

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
    },
    rowContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },

    textInput: {
      backgroundColor: "lightblue",
      width: 30,
      height: 50,
    },
  });

  const sendRequest = () => {
    setIsLoading(true);
    api("number", { min: min, max: max }).then((res) => {
      setResult(res.result);
      setIsLoading(false);
    });
  };

  const handleMinChange = (val) => {
    // console.log(val);
    if (!val) {
      setMin(0);
    } else {
      setMin(parseInt(val));
    }
  };
  const handleMaxChange = (val) => {
    // console.log(parseInt(val));
    if (!val) {
      setMax(0);
    } else {
      setMax(parseInt(val));
    }
  };

  return (
    <SmallContainer
      child={
        <View style={styles.container}>
          <Text>{isLoading ? "Loading..." : result ?? "No result"}</Text>
          <Text>Range</Text>
          <View style={styles.rowContainer}>
            <Text>From</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="number-pad"
              onChangeText={handleMinChange}
            />
            <Text>To</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="number-pad"
              onChangeText={handleMaxChange}
            />
          </View>
          <RandomButton onPress={sendRequest} />
        </View>
      }
    />
  );
};

export default NumberPage;
