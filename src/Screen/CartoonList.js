import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native'

import { cartoon } from '../data/cartoon'

const styles = StyleSheet.create({
  container : {
    flex: 1,
  },
})

export default class CartoonList extends Component {

  _renderCartoonList = () => {
    return cartoon.map((item) => {
      return(
        <TouchableOpacity>
          <Image />
        </TouchableOpacity>
      )
    })
  }
  render() {
    return(
      <ScrollView style={styles.container} >

      </ScrollView>
    )
  }
}