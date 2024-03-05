import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [pressed, SetPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Text testID="welcome">Welcome Dhrupal Rafaliya</Text>
      <TouchableOpacity onPress={() => SetPressed(!pressed)} testID="tappable">
        <Text>Button</Text>
      </TouchableOpacity>
      {
        !!pressed ? <Text testID="welcome-pratham">Welcome Pratham</Text> : <Text testID="welcome-dhrupal">Welcome Dhrupal</Text>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
