import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import RandomButton from "../components/random-button";
import SmallContainer from "../components/small-container";
import api from "../utils/api";

const ListPage = () => {
  const [list, setList] = useState([]);
  const [result, setResult] = useState();
  const [inputValue, setInputValue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const styles = StyleSheet.create({
    inputField: {
      width: 200,
      height: 60,
      backgroundColor: "gray",
    },
    inputRow: {
      display: "flex",
      flexDirection: "row",
    },
  });

  const sendRequest = () => {
    setIsLoading(true);
    api("list", { list: list }).then((res) => {
      if (res.result) {
        setResult(res.result);
      }
      setIsLoading(false);
    });
  };

  const handleInputChange = (val) => {
    setInputValue(val);
  };

  const handleAddData = () => {
    if (!list.includes(inputValue)) {
      let tmp = [...list];
      tmp.push(inputValue);
      setList(tmp);
    }
    setInputValue("");
  };

  return (
    <SmallContainer
      child={
        <View>
          <Text>{isLoading ? "Loading..." : `Result: ${result ?? ""}`}</Text>
          {list.length > 0 ? (
            <FlatList
              data={list}
              renderItem={({ item }) => <Text>{item.toString()}</Text>}
              keyExtractor={(item) => `${item}`}
            />
          ) : (
            <Text>No Data</Text>
          )}

          <View style={styles.inputRow}>
            <TextInput
              style={styles.inputField}
              keyboardType="default"
              onChangeText={handleInputChange}
              value={inputValue}
            />
            <Button title="Add" onPress={handleAddData} />
          </View>
          <RandomButton onPress={sendRequest} />
        </View>
      }
    />
  );
};

export default ListPage;
