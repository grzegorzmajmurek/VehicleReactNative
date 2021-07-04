import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList, Picker } from "react-native";
import vpic from "../api/vpic";

const HomeScreen = () => {
  const [ selectedValue, setSelectedValue ] = useState('honda');
  const [ cars, setResults ] = useState([]);

  const searchVehicle = async () => {
    const response = await vpic.get(selectedValue, {
      params: {
        format: 'json'
      }
    });
    setResults(response.data.Results);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wybierz markę samochodu</Text>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}>
          <Picker.Item label='Honda' value='honda'/>
          <Picker.Item label='Bmw' value='bmw'/>
          <Picker.Item label='Toyota' value='toyota'/>
          <Picker.Item label='Mazda' value='mazda'/>
        </Picker>
        <Button onPress={() => searchVehicle()}
                title="Wybierz samochód"/>
      </View>
      <FlatList
        keyExtractor={(car) => car.Model_ID.toString()}
        data={cars}
        renderItem={({ item }) => {
          return (
            <Text
              style={styles.textStyle}>
              <Text style={styles.textBold}>Marka: </Text>
              <Text>{item.Make_Name}</Text>
              <Text style={styles.textBold}>ModelId:</Text>
              <Text>{item.Model_ID}</Text>
              <Text style={styles.textBold}>Model:</Text>
              <Text>{item.Model_Name}</Text>;
            </Text>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10
  },
  textBold: {
    fontWeight: 'bold',
    paddingRight: 10,
    paddingLeft: 10
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20
  },
  picker: {
    marginRight: 10,
    width: 150
  }
});

export default HomeScreen;
