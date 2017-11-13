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
    borderBottomColor: colorBase.whiteGray,
    padding: 20,
  },

  listTitle: {
    fontWeight: 'bold',
    color: colorBase.darkBlack,
  },

  listDescription: {
    color: colorBase.darkGray,
  },
})

export default class Home extends Component {

  _onPressList = (routeName) => {

    this.props.navigation.navigate(routeName)
  }

  _renderItemList = () => {
    return Object.keys(HomeRoutes).map((routeName) => {
      let { name, description } = HomeRoutes[routeName]
      return(
        <TouchableOpacity
          key={routeName}
          style={styles.listWrapper}
          onPress={()=>this._onPressList(routeName)}
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