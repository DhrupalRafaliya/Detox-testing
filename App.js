import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler'

const HomeScreen = ({ navigation }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Text testID="welcome">Welcome Dhrupal Rafaliya</Text>
      <TouchableOpacity onPress={() => setPressed(!pressed)} testID="tappable">
        <Text>Button</Text>
      </TouchableOpacity>
      {!!pressed ? (
        <Text testID="welcome-pratham">Welcome Pratham</Text>
      ) : (
        <Text testID="welcome-dhrupal">Welcome Dhrupal</Text>
      )}
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => navigation.navigate('Details')} testID="goto-details">
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const DetailsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Details Screen</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Home')} testID="goto-home">
      <Text>Go to Home</Text>
    </TouchableOpacity>
  </View>
);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
