import { Text, StyleSheet, View, SafeAreaView, ScrollView, Platform } from 'react-native'
import React, { Component } from 'react'

export default class Views extends Component {
  render() {
    return (
    <SafeAreaView>

      <ScrollView style={{backgroundColor: '#dfb'}} horizontal>
        <Text style={[styles.nav]}>Item1</Text>
        <Text style={[styles.nav]}>Item2</Text>
        <Text style={[styles.nav]}>Item3</Text>
        <Text style={[styles.nav]}>Item4</Text>
        <Text style={[styles.nav]}>Item5</Text>
        <Text style={[styles.nav]}>Item6</Text>
        <Text style={[styles.nav]}>Item7</Text>
      </ScrollView>

      <ScrollView style={[styles.ScrollView]} contentContainerStyle={{margin: 30}} showsVerticalScrollIndicator={false}>
        <Text style={[styles.text]}>This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.This is along story.</Text>
        <View style={{height: Platform.OS === 'ios' ? 0 : 200}}></View>
        {/* solve the problem that the ScrollView could not be fully displayed in Android*/}
      </ScrollView>
      

    </SafeAreaView>


    )
  }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    ScrollView: {
        backgroundColor: '#ddd',
        marginHorizontal: 20
    },
    nav: {
        margin: 18,
        height: 50,
        fontSize: 30
    }

})