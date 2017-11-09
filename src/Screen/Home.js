import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import colorBase from '../utils/colorBase'
import { HomeRoutes } from '../navigation/router'

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: colorBase.white,
  },

  listWrapper: {
    height: 70,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colorBase.whiteGrey,
    padding: 10,
  },

  listTitle: {
    fontWeight: 'bold',
  },

  listDescription: {
    color: colorBase.darkGrey,
  },
})

export default class Home extends Component {

  _renderItemList = () => {
    return Object.keys(HomeRoutes).map((routeName) => {
      let { name, description } = HomeRoutes[routeName]
      return(
        <TouchableOpacity
          key={routeName}
          style={styles.listWrapper}
        > 
          <Text style={styles.listTitle} >{name}</Text>
          <Text style={styles.listDescription} >{description}</Text>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return(
      <ScrollView style={styles.container} >
        {this._renderItemList()}
      </ScrollView>
    )
  }
}