import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

export default function App() {
  const [color, setColor] = useState('blue');

  const changeColor = () => {
    if (color === 'blue') setColor('red');
    else setColor('blue');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{ margin: 16, borderWidth: 2, borderColor: color, padding: 8 }}
      >
        This dummy app change the color of a tile
      </Text>
      <Card
        style={{
          margin: 'auto',
          width: 100,
          height: 100,
          backgroundColor: color,
        }}
      ></Card>
      <Pressable style={styles.button} onPress={changeColor}>
        <Text style={styles.buttonText}>Press me</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  button: {
    backgroundColor: '#00008B',
    marginTop: 20,
    padding: 10,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    margin: 'auto',
    padding: 'auto',
  },
});
