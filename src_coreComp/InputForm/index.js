import { Text, StyleSheet, View, TextInput, Dimensions, Button } from 'react-native'
import React, { Component } from 'react'

export default class InputForm extends Component {

   doLogin = () => {
     console.log(this.state)
   }

   state = {
    username: '',
    password: ''
   }


  render(){
    const {username,password} = this.state

    return (
      <View style={[styles.container]}>
        <TextInput style={[styles.formInput]} placeholder="Username" value={username} onChangeText={(val) => {
            this.setState({username: val})
        }}/>

        <TextInput style={[styles.formInput]} placeholder="Password" secureTextEntry value={password} onChangeText={(val) => {
            this.setState({password: val})
        }}/>
        <TextInput style={[styles.formInput]} placeholder="Email" keyboardType='email-address' />
        
        <TextInput style={[styles.formInput]} multiline numberOfLines={5} textAlignVertical='top' />
        <Button title='Login' onPress={this.doLogin} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
    justifyContent: 'space-around',
    alignItems: 'center'
    },
    formInput: {
        width: Dimensions.get('window').width - 20,
        margin: 10,
        borderWidth: 1,
        borderColor: 'red',
        paddingHorizontal: 5
    }

})