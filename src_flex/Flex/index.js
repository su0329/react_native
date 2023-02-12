import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class FlexSam extends Component {

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
            borderWidth: 1,
            padding: 4,
            borderColor: 'red',
            backgroundColor: '#dfb',
            textAlign: 'center' // text center
        },
        flexRow: {
            flexDirection: 'row'
        },
        flexCol: {
            flexDirection: 'column'
        }
    })
       

    return (
      <ScrollView>
        <Text style={[styles.h2]}>Main axis</Text>
        <View>
            
        <View>
            <Text style={[styles.h3]}>flexRow 1:1:1</Text>
        <View style={[styles.container, styles.flexRow]}>
          <Text style={[styles.itemBase, {flex: 1}]}>Item1</Text>
          <Text style={[styles.itemBase, {flex: 1}]}>Item2</Text>
          <Text style={[styles.itemBase, {flex: 1}]}>Item3</Text>
        </View>
        </View>

        <View>
            <Text style={[styles.h3]}>flexRow 1:2:3</Text>
        <View style={[styles.container, styles.flexRow]}>
          <Text style={[styles.itemBase, {flex: 1}]}>Item1</Text>
          <Text style={[styles.itemBase, {flex: 2}]}>Item2</Text>
          <Text style={[styles.itemBase, {flex: 3}]}>Item3</Text>
        </View>
        </View>

        <View>
            <Text style={[styles.h3]}>flexCol 1:1:1</Text>
        <View style={[styles.container, styles.flexCol]}>
          <Text style={[styles.itemBase, {flex: 1}]}>Item1</Text>
          <Text style={[styles.itemBase, {flex: 1}]}>Item2</Text>
          <Text style={[styles.itemBase, {flex: 1}]}>Item3</Text>
        </View>
        </View>

        <View>
            <Text style={[styles.h3]}>flexCol 1:2:3</Text>
        <View style={[styles.container, styles.flexCol]}>
          <Text style={[styles.itemBase, {flex: 1}]}>Item1</Text>
          <Text style={[styles.itemBase, {flex: 2}]}>Item2</Text>
          <Text style={[styles.itemBase, {flex: 3}]}>Item3</Text>
        </View>
        </View>

       </View>
      </ScrollView>
    )
  }
}