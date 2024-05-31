import { StyleSheet, Text, View } from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.purpleBox} />
        <View style={styles.orangeBox} />
      </View>
      <View style={styles.redBox} />
      <View style={styles.blueBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  purpleBox: {
    flex: 1,
    backgroundColor: 'lavender',
  },
  orangeBox: {
    flex: 1,
    backgroundColor: 'peachpuff',
  },
  redBox: {
    flex: 1,
    backgroundColor: 'mistyrose',
  },
  blueBox: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
});

export default App;
