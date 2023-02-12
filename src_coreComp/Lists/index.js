import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Alert,
  FlatList
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

const DATA2= [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
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
       {/*<SectionList
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

        
          onEndReachedThreshold={0.1}
          onEndReached={()=>{
            alert("keep loading data")
          }} 
        

          ListHeaderComponent={()=>{
            return <Text style={{fontSize: 50}}>List title</Text>}}
        /> 

        */ }

        <FlatList
        data={DATA2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        ItemSeparatorComponent = {() => {
          return <View style={{borderBottomWidth: 1,borderBottomColor: 'red'}}></View>
        }}
        ListEmptyComponent = { () => {
          return <Text style={{fontSize: 30}}> Nothing here !</Text>
        }}

        refreshing={this.state.isFresh}
        onRefresh={this.loadingData}

        onEndReachedThreshold={0.1}
        onEndReached={()=>{
          alert("keep loading data")
        }}

        initialScrollIndex={2}
        // lazy loading data
        initialNumToRender={4}

       

        
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
    marginHorizontal: 16,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
