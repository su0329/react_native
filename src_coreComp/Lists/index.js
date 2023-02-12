import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Alert
} from 'react-native'

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
]

export default class Lists extends Component {

  state={
    isFresh: false,
  }

  loadingData = () => {
    this.setState({isFresh:true})

    setTimeout(()=>{
      this.setState({isFresh:false})
    },2000)
    alert('loading data finished');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
          ItemSeparatorComponent = {() => {
            return <View style={{borderBottomWidth: 1,borderBottomColor: 'red'}}></View>
          }}
          ListEmptyComponent = { () => {
            return <Text style={{fontSize: 30}}> Nothing here !</Text>
          }}

          refreshing={this.state.isFresh}
          onRefresh={this.loadingData}
          
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
