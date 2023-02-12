import { Text, StyleSheet, View, Button, Animated} from 'react-native'
import React, { Component } from 'react'

export default class Animateds extends Component {


  state = {
    // set the animated opacity is 0
    fadeAnim: new Animated.Value(0),
    moveAnim: new Animated.Value(0)
  }

  fadeIn = () =>{
    // will change the opacity value to 1 in 5 sec
    Animated.timing(this.state.fadeAnim,{
      toValue: 1,
      duration: 5000,
      useNativeDriver: true
    }).start();
  }

  fadeOut = () =>{
    // will change the opacity value to 1 in 5 sec
    Animated.timing(this.state.fadeAnim,{
      toValue: 0,
      duration: 5000,
      useNativeDriver: true
    }).start(); 
  }

  componentDidMount(){
    this.ScanMove()
  }

  ScanMove = () => {
    Animated.timing(this.state.moveAnim,{
      toValue: 198,
      duration: 2000,
      useNativeDriver: true
    }).start(()=>{
        this.setState({moveAnim: new Animated.Value(0)})
        this.ScanMove()
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[
            styles.fadingContainer,
            {
                 opacity: this.state.fadeAnim
            }
        ]}>
          
          <Text style={styles.fadingText}>Fading view </Text>
        </Animated.View>
        <View style={styles.buttonRow}>
            <Button title="Fade In" onPress={this.fadeIn}></Button>
            <Button title="Fade Out" onPress={this.fadeOut}></Button>
        </View>

        <View style={[styles.scanContainer]}>
            <Animated.View style={[styles.scanBorder,
            {transform: [{
                translateY: this.state.moveAnim
            }]}]}>


            </Animated.View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: 'powderblue'
    },
    fadingText: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10
    },
    buttonRow: {
        flexDirection: 'row',
        marginVertical: 16
    },
    scanContainer: {
        height: 200,
        width: 200,
        borderWidth: 1,
        borderColor: 'green'
    },
    scanBorder: {
        borderWidth: 1,
        borderColor: 'red'
    }

})