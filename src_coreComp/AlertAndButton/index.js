import { Text, StyleSheet, View, Alert, Button } from 'react-native'
import React, { Component } from 'react'

export default class AlertAndButton extends Component {

    buttonPress = () =>{
      Alert.alert("title","content",
      [{
        text: "Cancel",
        onPress: () => console.log('Cancel clicked'),
        style: 'cancel'
       },
       {
        text: "Confirm",
        onPress: () => console.log('Confirm clicked'),
        style: 'default'
       }]
       )}
    

  render() {
    return (
      <View style={[styles.container]}>
       <Button title='alert' onPress={()=>{
        alert('this is a button')
       }}
       ></Button>
       <Button title='Alert.alert' onPress={()=>{
        Alert.alert('this is a button')
       }}
       color='red'>
       </Button>
       <Button title='Confirm' onPress={this.buttonPress}
       color='yellow'>
       </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})