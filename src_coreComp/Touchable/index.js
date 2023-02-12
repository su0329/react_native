import { Text, StyleSheet, View,
     TouchableHighlight, TouchableOpacity,
      TouchableWithoutFeedback, Dimensions } from 'react-native'
import React, { Component } from 'react'

export default class Touchable extends Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.formInput}>
        <TouchableHighlight onPress={() => {
            console.log('highlight is clicked')
        }} >
            <Text>highlight</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.formInput}>
        <TouchableOpacity onPress={() => {
            console.log('Opacity is clicked')
        }} >
            <Text>highlight</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formInput}>
        <TouchableWithoutFeedback onPress={() => {
            console.log('Without feedback is clicked')
        }} >
            <Text>highlight</Text>
        </TouchableWithoutFeedback>
      </View>

    </View>
    )
  }
}

const styles = StyleSheet.create({container: {
    justifyContent: 'space-around',
    alignItems: 'center'
    },
    formInput: {
        width: Dimensions.get('window').width - 20,
        margin: 10,
        borderWidth: 1,
        borderColor: 'red',
        paddingHorizontal: 5
    }})