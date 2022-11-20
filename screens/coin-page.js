import React, { useState } from "react";
import { Button, View, Text, StyleSheet, Image } from "react-native";
import RandomButton from "../components/random-button";
import SmallContainer from "../components/small-container";
import api from "../utils/api";
import { capitalizeFirstLetter } from "../utils/util-functions";

const CoinPage = () => {
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [path, setpath] = useState(require("../assets/pic/coin_toss.gif"));
  const sendRequest = () => {
    setIsLoading(true);
    api("coin").then((res) => {
      if (res.result) {
        setResult(res.result);
        switch (res.result) {
          case "heads":
            setpath(require("../assets/pic/head.png"));
            break;
          case "tails":
            setpath(require("../assets/pic/tail.png"));
            break;
        }
      }
      setIsLoading(false);
    });
  };

  return (
    <SmallContainer
      child={
        <View style={styles.large_container}>
          <View style={styles.container}>
            <Text style={styles.text_style}>
              {isLoading ? "Loading..." : result ? capitalizeFirstLetter(result) : "no result"}
            </Text>
            <Image style={styles.image} source={path} />
          </View>

          <View>
            <RandomButton onPress={sendRequest} />
          </View>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  large_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    backgroundColor: "#ffffff",
    height: 420,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 50,
  },

  text_style: {
    fontSize: 60,
    marginBottom: 5,
  },

  image: {
    height: 250,
    width: 250,
  },
});

export default CoinPage;
