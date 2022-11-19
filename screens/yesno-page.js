import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import RandomButton from "../components/random-button";
import SmallContainer from "../components/small-container";
import api from "../utils/api";
import { capitalizeFirstLetter } from "../utils/util-functions";

const YesNoPage = () => {
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [path, setpath] = useState(require("../assets/pic/yes_no.gif"));
  const sendRequest = () => {
    setIsLoading(true);
    api("yesno").then((res) => {
      if (res.result) {
        setResult(res.result);
        switch (res.result) {
          case "yes":
            setpath(require("../assets/pic/yes.png"));
            break;
          case "no":
            setpath(require("../assets/pic/no.png"));
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
            {/* <Text style={styles.text_style}>
              {isLoading ? "Loading..." : result ?? "no result"}
            </Text> */}
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

export default YesNoPage;
