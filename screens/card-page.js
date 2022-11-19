import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import RandomButton from "../components/random-button";
import SmallContainer from "../components/small-container";
import api from "../utils/api";
import cardsImage from "./cardsIndex";

const CardPage = () => {
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [path, setpath] = useState(
    require("../assets/cards/card-roll.gif")
  );
  const sendRequest = () => {
    setIsLoading(true);
    api("card").then((res) => {
      if (res.result) {
        setResult(res.result);
        var cardPath = ``;
        switch (res.result.suiteNumber) {
          case 1:
            cardPath += `S`;
            break;
          case 2:
            cardPath += `H`;
            break;
          case 3:
            cardPath += `C`;
            break;
          case 4:
            cardPath += `D`;
            break;
        }
        console.log(res.result.randomNumber);
        cardPath += res.result.randomNumber;
        // cardsImage.cardPath
        setpath(cardsImage[cardPath]);
      }
      setIsLoading(false);
    });
  };
  return (
    <SmallContainer
      child={
        <View style={styles.large_container}>
          <View style={styles.container}>
            {isLoading ? (
              <Text>Loading...</Text>
            ) : result ? (
              <View>
                <Text>{`${result.cardValue} of ${result.suite}`}</Text>
                {/* <Text>{`card value: ${result.cardValue}`}</Text>
                <Text>{`suite: ${result.suite}`}</Text>
                <Text>{`random number: ${result.randomNumber}`}</Text>
                <Text>{`suite number: ${result.suiteNumber}`}</Text> */}
              </View>
            ) : (
              <Text>No result</Text>
            )}
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

export default CardPage;
