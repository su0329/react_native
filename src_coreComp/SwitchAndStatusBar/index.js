import { Text, StyleSheet, View, Switch, StatusBar, ActivityIndicator, Image, Dimensions } from 'react-native'
import React, { Component } from 'react'

export default class SwitchAndStatusBar extends Component {
   state = {
    status: false
   }

   changeStatus = ()=>{
    let sta = this.state.status
    this.setState({status: !sta})
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Text>something</Text>
        <StatusBar hidden={false} backgroundColor="red" barStyle={'dark-content'}/>
        <Switch trackColor={{false: 'red', true: 'green'}} 
        thumbColor={'blue'} value={this.state.status} 
        onValueChange={ this.changeStatus}/> 
        <ActivityIndicator color='red' size={'large'}></ActivityIndicator>
        <Image style={[styles.itemImage]} source={require('../../resources/pc_ziwensu.jpg')} /> 
        {/* loading local pic - require
            loading online source - source={{uri: ''}}
        */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    itemImage : {
      height: 200,
      width: Dimensions.get('window').width-20,
      marginVertical: 20
    }
})