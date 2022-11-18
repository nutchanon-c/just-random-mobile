import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import RandomButton from "../components/random-button";
import SmallContainer from "../components/small-container";
import api from "../utils/api";

const CoinPage = () => {
  const [result, setResult] = useState();

  const sendRequest = () => {
    api("coin").then((res) => {
      if (res.result) {
        setResult(res.result);
      }
    });
  };

  return (
    <SmallContainer
      child={
        <View>
          <Text>{result ?? "No result"}</Text>
          <RandomButton onPress={sendRequest} />
        </View>
      }
    />
  );
};

export default CoinPage;
