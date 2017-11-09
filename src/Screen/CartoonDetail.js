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

import CartoonList from '../components/CartoonList'

const MARGIN = 10

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorBase.whiteGrey,
  },

  headerCover: {
    height: 200,
    backgroundColor: colorBase.nudeBeige,
    justifyContent: 'center',
    paddingHorizontal: MARGIN,
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colorBase.darkBlack,
  },
  
  cartoonImg: {
    // width: 100,
    height: 150,
  },
})

export default class CartoonDetail extends Component {

  _pushNavigation = (name, gallery) => {
    // push to CartoonFeed again, again and again
    this.props.navigation.navigate('CartoonDetail', { name, gallery })
  }

  _renderHeader = () => {
    const { navigation } = this.props;
    const { state, setParams } = navigation;
    const { params } = state
    const { name, gallery } = params

    return (
      <View style={styles.headerCover} >
        <Text style={styles.headerText} >{name}</Text>
        <Image style={styles.cartoonImg} source={{ uri: gallery[0] }} />
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={styles.container} >
        {this._renderHeader()}
        <CartoonList onPress={this._pushNavigation} />
      </ScrollView>
    )
  }
}

CartoonDetail.navigationOptions = props => {

  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state

  let title = 'Cartoon Detail'
  // if(params) {
  //   const { name } = params
  //   title = name ? name : title
  // }

  return {
    title
  }
}