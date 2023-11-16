import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import InitialPage from "./src/pages/initial-page";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "./src/routes";

export default function App() {
  return <Routes />;
}
