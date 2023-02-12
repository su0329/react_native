import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class JustifyContentSam extends Component {
  render() {
    const styles = StyleSheet.create({
        container: {
            height: 150,
            margin: 10,
            borderWidth: 1,
            borderColor: '#ddd'
        },
        h3: {
            fontSize: 24,
            marginHorizontal: 10
        },
        h2: {
            fontSize: 30,
            marginHorizontal: 15
        },
        itemBase: {
            height: 30,
            borderWidth: 1,
            borderColor: 'red',
            backgroundColor: '#dfb',
            padding: 4,
            textAlign: 'center' // text center
        },
        flexRow: {
            flexDirection: 'row'
        },
        JustifyContentDefault: {
            justifyContent: 'flex-start'
        },
        JustifyContentCenter: {
            justifyContent: 'center'
        },
        JustifyContentFlexEnd: {
            justifyContent: 'flex-end'
        },
        JustifyContentSpaceAround: {
            justifyContent: 'space-around'
        },
        JustifyContentSpaceEvenly: {
            justifyContent: 'space-evenly'
        },
        JustifyContentSpaceBetween: {
            justifyContent: 'space-between'
        }
        
    })

    return (
        <ScrollView>
        <Text style={[styles.h2]}>Main axis</Text>
        <View>         
        <View>
            <Text style={[styles.h3]}>JustifyContentDefault</Text>
        <View style={[styles.container, styles.flexRow, styles.JustifyContentDefault]}>
          <Text style={[styles.itemBase]}>Item1</Text>
          <Text style={[styles.itemBase]}>Item2</Text>
          <Text style={[styles.itemBase]}>Item3</Text>
        </View>
        </View>
        <View>
            <Text style={[styles.h3]}>JustifyContentCenter</Text>
        <View style={[styles.container, styles.flexRow, styles.JustifyContentCenter]}>
          <Text style={[styles.itemBase]}>Item1</Text>
          <Text style={[styles.itemBase]}>Item2</Text>
          <Text style={[styles.itemBase]}>Item3</Text>
        </View>
        </View>
        <View>
            <Text style={[styles.h3]}>JustifyContentFlexEnd</Text>
        <View style={[styles.container, styles.flexRow, styles.JustifyContentFlexEnd]}>
          <Text style={[styles.itemBase]}>Item1</Text>
          <Text style={[styles.itemBase]}>Item2</Text>
          <Text style={[styles.itemBase]}>Item3</Text>
        </View>
        </View>
        <View>
            <Text style={[styles.h3]}>JustifyContentSpaceAround</Text>
        <View style={[styles.container, styles.flexRow, styles.JustifyContentSpaceAround]}>
          <Text style={[styles.itemBase]}>Item1</Text>
          <Text style={[styles.itemBase]}>Item2</Text>
          <Text style={[styles.itemBase]}>Item3</Text>
        </View>
        </View>
        <View>
            <Text style={[styles.h3]}>JustifyContentSpaceEvenly</Text>
        <View style={[styles.container, styles.flexRow, styles.JustifyContentSpaceEvenly]}>
          <Text style={[styles.itemBase]}>Item1</Text>
          <Text style={[styles.itemBase]}>Item2</Text>
          <Text style={[styles.itemBase]}>Item3</Text>
        </View>
        </View>
        <View>
            <Text style={[styles.h3]}>JustifyContentSpaceBetween</Text>
        <View style={[styles.container, styles.flexRow, styles.JustifyContentSpaceBetween]}>
          <Text style={[styles.itemBase]}>Item1</Text>
          <Text style={[styles.itemBase]}>Item2</Text>
          <Text style={[styles.itemBase]}>Item3</Text>
        </View>
        </View>
       </View>
      </ScrollView>
    )
  }
}