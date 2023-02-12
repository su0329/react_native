import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class AlignItemsSam extends Component {

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
        AlignItemsFlexStart: {
            alignItems: 'flex-start'
        },
        AlignItemsCenter: {
            alignItems: 'center'
        },
        AlignItemsFlexEnd: {
            alignItems: 'flex-end'
        },
        AlignItemsStretch: {
            alignItems: 'Stretch'
        },
        AlignItemsBaseline: {
            alignItems: 'baseline'
        }
    })
       

    return (
      <ScrollView>
        <Text style={[styles.h2]}>Main axis</Text>
        <View>
            
        <View>
            <Text style={[styles.h3]}>AlignItemsFlexStart</Text>
        <View style={[styles.container, styles.flexRow, styles.AlignItemsFlexStart]}>
          <Text style={[styles.itemBase]}>Item1</Text>
          <Text style={[styles.itemBase]}>Item2</Text>
          <Text style={[styles.itemBase]}>Item3</Text>
        </View>
        </View>

        <View>
            <Text style={[styles.h3]}>AlignItemsCenter</Text>
        <View style={[styles.container, styles.flexRow, styles.AlignItemsCenter]}>
          <Text style={[styles.itemBase]}>Item1</Text>
          <Text style={[styles.itemBase]}>Item2</Text>
          <Text style={[styles.itemBase]}>Item3</Text>
        </View>
        </View>

        <View>
            <Text style={[styles.h3]}>AlignItemsFlexEnd</Text>
        <View style={[styles.container, styles.flexRow, styles.AlignItemsFlexEnd]}>
          <Text style={[styles.itemBase]}>Item1</Text>
          <Text style={[styles.itemBase]}>Item2</Text>
          <Text style={[styles.itemBase]}>Item3</Text>
        </View>
        </View>

        <View>
            <Text style={[styles.h3]}>AlignItemsDefault</Text>
        <View style={[styles.container, styles.flexRow]}>
          <Text style={[styles.itemBase]}>Item1</Text>
          <Text style={[styles.itemBase]}>Item2</Text>
          <Text style={[styles.itemBase]}>Item3</Text>
        </View>
        </View>

        <View>
            <Text style={[styles.h3]}>AlignItemsBaseline</Text>
        <View style={[styles.container, styles.flexRow, styles.AlignItemsBaseline]}>
          <Text style={[styles.itemBase]}>Item1</Text>
          <Text style={[styles.itemBase, {fontSize: 60}]}>Item2</Text>
          <Text style={[styles.itemBase, {fontSize: 40}]}>Item3</Text>
        </View>
        </View>

       </View>
      </ScrollView>
    )
  }
}