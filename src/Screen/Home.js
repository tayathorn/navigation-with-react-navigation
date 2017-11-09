import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native'

import colorBase from '../utils/colorBase'

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: colorBase.whiteGrey,
  },
})

export default class Home extends Component {
  render() {
    return(
      <ScrollView style={styles.container} >
        
      </ScrollView>
    )
  }
}