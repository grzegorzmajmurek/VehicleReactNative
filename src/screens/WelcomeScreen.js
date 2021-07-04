import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const WelcomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Witamy w aplikacji automotive</Text>
      <Button onPress={() => navigation.navigate('Home')}
              title="Start"/>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20
  },
});

export default WelcomeScreen;
