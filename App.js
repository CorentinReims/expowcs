import React from 'react';
import { StyleSheet, View } from 'react-native';
import Banane from './pictures/bananes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Banane title="Belles bananes" />
      {/* <Button title="Show alert">Show alert</Button> */}
    </View>
  );
}
