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
      marginBottom: 20,
    },

    textInput: {
      backgroundColor: "white",
      width: 50,
      height: 35,
      marginRight: 10,
      marginLeft: 10,
      borderRadius: 5,
    },

    container2: {
      backgroundColor: "#ffffff",
      height: 350,
      width: 350,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      marginBottom: 20,
    },

    textInput0: {
      marginBottom: 10,
    },

    textInput01: {
      fontSize: 25,
      fontWeight: "bold",
    },

    textInput02: {
      fontSize: 20,
    },

    textInput03: {
      fontSize: 70,
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
          <View style={styles.container2}>
            <Text style={styles.textInput03}>
              {isLoading ? "Loading" : result ?? "No result"}
            </Text>
          </View>

          <View style={styles.textInput0}>
            <Text style={styles.textInput01}>Range</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.textInput02}>From</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="number-pad"
              onChangeText={handleMinChange}
            />
            <Text style={styles.textInput02}>To</Text>
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
