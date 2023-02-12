import { Text, StyleSheet, View, Dimensions } from 'react-native'
import React, { Component } from 'react'

export default class DimenSam extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.itemBase]}>
        <Text style={[styles.h3]}>Item1</Text>
        </View>
        <View style={[styles.itemBase]}>
        <Text style={[styles.h3]}>Item2</Text>
        </View>
        <View style={[styles.itemBase]}>
        <Text style={[styles.h3]}>Item3</Text>
        </View>
        <View style={[styles.itemBase]}>
        <Text style={[styles.h3]}>Item4</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap' //使item换行， 解决item出画问题
    },
    itemBase: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b38a',
        width: Dimensions.get('window').width/4,
        height: 90,
        borderWidth: 1,
        borderColor: 'yellow',
        fontSize: 30
    },
    h3: {
        fontSize: 24,
        marginHorizontal: 10
    }
})