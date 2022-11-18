import React, { useState } from "react";
import { View, Text } from "react-native";
import RandomButton from "../components/random-button";
import SmallContainer from "../components/small-container";
import api from "../utils/api";

const CardPage = () => {
  const [result, setResult] = useState();
  const sendRequest = () => {
    api("card").then((res) => {
      if (res.result) {
        setResult(res.result);
      }
    });
  };
  return (
    <SmallContainer
      child={
        <View>
          {result ? (
            <View>
              <Text>{`${result.cardValue} of ${result.suite}`}</Text>
              <Text>{`card value: ${result.cardValue}`}</Text>
              <Text>{`suite: ${result.suite}`}</Text>
              <Text>{`random number: ${result.randomNumber}`}</Text>
              <Text>{`suite number: ${result.suiteNumber}`}</Text>
            </View>
          ) : (
            <Text>No result</Text>
          )}

          <RandomButton onPress={sendRequest} />
        </View>
      }
    />
  );
};

export default CardPage;
