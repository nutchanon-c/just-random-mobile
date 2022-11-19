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
      backgroundColor: "lightgray",
      margin: 10,
      padding: 10,
    },
    inputRow: {
      display: "flex",
      flexDirection: "row",
    },
    large_container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
      backgroundColor: "#ffffff",
      height: 300,
      width: 350,
      // alignItems: "center",
      // justifyContent: "center",
      padding: 20,
      borderRadius: 5,
      marginBottom: 50,
    },
    resultStyle: {
      fontSize: 20,
      marginBottom: 5,
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
        <View style={styles.large_container}>
          <View style={styles.container}>
            <Text style={styles.resultStyle}>
              {isLoading ? "Loading..." : `Result: ${result ?? ""}`}
            </Text>
            {list.length > 0 ? (
              <FlatList
                style={{
                  backgroundColor: "lightgray",
                  padding: 10,
                  margin: 10,
                }}
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
          </View>
          <View>
            <RandomButton onPress={sendRequest} />
          </View>
        </View>
      }
    />
  );
};

export default ListPage;
