import { StatusBar, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/homeScreen/HomeScreen";

export default function App() {
  return (
    <View style={styles.AndroidSafeArea}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "grey",
  },
});
