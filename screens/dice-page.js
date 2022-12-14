import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import RandomButton from "../components/random-button";
import SmallContainer from "../components/small-container";
import api from "../utils/api";

const DicePage = () => {
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [path, setpath] = useState(require("../assets/pic/rolling_dice.gif"));
  const sendRequest = () => {
    setIsLoading(true);
    api("dice").then((res) => {
      if (res.result) {
        setResult(res.result);
        switch (res.result) {
          case 1:
            setpath(require("../assets/pic/dice_1.png"));
            break;
          case 2:
            setpath(require("../assets/pic/dice_2.png"));
            break;
          case 3:
            setpath(require("../assets/pic/dice_3.png"));
            break;
          case 4:
            setpath(require("../assets/pic/dice_4.png"));
            break;
          case 5:
            setpath(require("../assets/pic/dice_5.png"));
            break;
          case 6:
            setpath(require("../assets/pic/dice_6.png"));
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
              {isLoading ? "Loading..." : result ?? "no result"}
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

export default DicePage;
