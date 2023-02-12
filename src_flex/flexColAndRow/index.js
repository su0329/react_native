import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class ColAndRow extends Component {

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
        flexColumn: {
            flexDirection: 'column'
        },
        flexColumnReverse: {
            flexDirection: 'column-reverse'
        },
        flexRow: {
            flexDirection: 'row'
        },
        flexRowReverse: {
            flexDirection: 'row-reverse'
        }
    })

    return (
      <ScrollView>
        <Text style={[styles.h2]}>Main axis</Text>
        <View>
            <Text style={[styles.h3]}>flexDirection: column</Text>
        <View style={[styles.container]}>
          <Text style={[styles.itemBase]}>Item1</Text>
          <Text style={[styles.itemBase]}>Item2</Text>
          <Text style={[styles.itemBase]}>Item3</Text>
        </View>
        <View>
            <Text style={[styles.h3]}>flexDirection: column-reverse</Text>
        <View style={[styles.container, styles.flexColumnReverse]}>
          <Text style={[styles.itemBase]}>Item1</Text>
          <Text style={[styles.itemBase]}>Item2</Text>
          <Text style={[styles.itemBase]}>Item3</Text>
        </View>
        </View>
        <View>
            <Text style={[styles.h3]}>flexDirection: flexRow</Text>
        <View style={[styles.container, styles.flexRow]}>
          <Text style={[styles.itemBase]}>Item1</Text>
          <Text style={[styles.itemBase]}>Item2</Text>
          <Text style={[styles.itemBase]}>Item3</Text>
        </View>
        </View>
        <View>
            <Text style={[styles.h3]}>flexDirection: RowReverse</Text>
        <View style={[styles.container, styles.flexRowReverse]}>
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