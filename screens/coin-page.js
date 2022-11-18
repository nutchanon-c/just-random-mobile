import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import RandomButton from "../components/random-button";
import SmallContainer from "../components/small-container";
import api from "../utils/api";

const CoinPage = () => {
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = () => {
    setIsLoading(true);
    api("coin").then((res) => {
      if (res.result) {
        setResult(res.result);
      }
      setIsLoading(false);
    });
  };

  return (
    <SmallContainer
      child={
        <View>
          <Text>{isLoading ? "Loading..." : result ?? "No result"}</Text>
          <RandomButton onPress={sendRequest} />
        </View>
      }
    />
  );
};

export default CoinPage;
