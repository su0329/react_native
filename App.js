import { View,Text } from 'react-native'
import React, { Component } from 'react'
import AlignItemsSam from './src_flex/AlignItemsSam/AlignItemSam'
import FlexSam from './src_flex/Flex'
import DimenSam from './src_dimension'
import AlertAndButton from './src_coreComp/AlertAndButton'
import SwitchAndStatusBar from './src_coreComp/SwitchAndStatusBar'
import InputForm from './src_coreComp/InputForm'
import Touchable from './src_coreComp/Touchable'
import Views from './src_coreComp/Views'
import Lists from './src_coreComp/Lists'




export default class App extends Component {

  render() {
    return (
      <View>
            <Lists/>
      </View>
    )
  }
}

