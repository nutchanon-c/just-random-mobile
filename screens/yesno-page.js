import React, { useState } from "react";
import { View, Text } from "react-native";
import RandomButton from "../components/random-button";
import SmallContainer from "../components/small-container";
import api from "../utils/api";

const YesNoPage = () => {
  const [result, setResult] = useState();
  const sendRequest = () => {
    api("yesno").then((res) => {
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

export default YesNoPage;
