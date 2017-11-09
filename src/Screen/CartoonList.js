import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native'

import { cartoon } from '../data/cartoon'
import colorBase from '../utils/colorBase'

const MARGIN = 10

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorBase.whiteGrey,
  },

  header: {
    height: 50,
    backgroundColor: colorBase.white,
    justifyContent: 'center',
    paddingHorizontal: MARGIN,
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colorBase.darkBlack,
  },

  cartoonListWrapper: {
    height: 150,
    backgroundColor: colorBase.white,
    paddingHorizontal: MARGIN,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  imgWrapper: {

  },

  cartoonImg: {
    width: 100,
    height: 100,
  },
  
  detailWrapper: {
    paddingHorizontal: 20,
  },

  cartoonTitle: {
    color: colorBase.darkBlack,
    fontWeight: 'bold',
  },

  cartoonDetailTitle: {
    fontWeight: 'bold',
    color: colorBase.darkGrey,
  },
  
  cartoonDetailValue: {
    fontWeight: 'normal',
    color: colorBase.darkGrey,
  },
})

export default class CartoonList extends Component {

  _openDetail = () => {

  }

  _renderHeader = () => {
    return (
      <View style={styles.header} >
        <Text style={styles.headerText} >Cartoon Network</Text>
      </View>
    )
  }

  _renderCartoonList = () => {
    return cartoon.map((cartoon) => {
      return (
        <TouchableOpacity
          key={cartoon.id}
          style={styles.cartoonListWrapper}
          onPress={() => this._openDetail()}
        >
          <View style={styles.imgWrapper} >
            <Image style={styles.cartoonImg} source={{ uri: cartoon.profile_picture }} /> 
          </View>
          <View style={styles.detailWrapper} >
            <Text style={styles.cartoonTitle} >{cartoon.name}</Text>
            <Text style={styles.cartoonDetailTitle} >
              {`Premiere date: `}
              <Text style={styles.cartoonDetailValue} >{cartoon.premiere_date}</Text>
            </Text>
            <Text style={styles.cartoonDetailTitle} >
              {`Current season: `}
              <Text style={styles.cartoonDetailValue} >{cartoon.current_season}</Text>
            </Text>
          </View>
          
        </TouchableOpacity>
      )
    })
  }
  render() {
    return (
      <ScrollView style={styles.container} >
        {this._renderHeader()}
        {this._renderCartoonList()}
        {this._renderCartoonList()}
      </ScrollView>
    )
  }
}