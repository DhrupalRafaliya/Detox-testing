import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const DetailScreen = ({navigation}) => {
    // render
    return (
        <View style={styles.container}>
        <Text>Details Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} testID="goto-home">
          <Text>Go to Home</Text>
        </TouchableOpacity>
      </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({})
