import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        <TouchableOpacity onPress={() => navigation.navigate('Details')} testID="goto-details">
          <Text>Go to Details</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default HomeScreen

const styles = StyleSheet.create({})
