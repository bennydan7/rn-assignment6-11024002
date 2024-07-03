import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
};

export default App;
