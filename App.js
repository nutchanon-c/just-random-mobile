import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomTab from "./components/bottom-tab";
import MainContainer from "./components/main-container";

export default function App() {
  return (
    <NavigationContainer>
      <MainContainer child={<BottomTab styles={styles.tabStyle} />} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabStyle: {
    backgroundColor: "black",
  },
});
