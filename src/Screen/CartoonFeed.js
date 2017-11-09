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
})

export default class CartoonFeed extends Component {

  _pushNavigation = (name, gallery) => {
    // push to CartoonFeed again, again and again
    this.props.navigation.navigate('CartoonDetail', { name, gallery })
  }

  _renderHeader = () => {
    return (
      <View style={styles.header} >
        <Text style={styles.headerText} >Cartoon Network</Text>
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

CartoonFeed.navigationOptions = props => {

  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state

  let title = 'Simple Stack'

  return {
    title
  }
}