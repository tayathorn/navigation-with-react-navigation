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
    backgroundColor: colorBase.whiteGray,
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
    color: colorBase.darkGray,
  },

  cartoonDetailValue: {
    fontWeight: 'normal',
    color: colorBase.darkGray,
  },
})

export default class CartoonList extends Component {

  _renderCartoonList = () => {
    return cartoon.map((cartoon) => {
      let { id, name, premiere_date, current_season, profile_picture, gallery } = cartoon
      return (
        <TouchableOpacity
          key={id}
          style={styles.cartoonListWrapper}
          onPress={() => this.props.onPress(name, gallery)}
        >
          <View>
            <Image style={styles.cartoonImg} source={{ uri: profile_picture }} />
          </View>
          <View style={styles.detailWrapper} >
            <Text style={styles.cartoonTitle} >{name}</Text>
            <Text style={styles.cartoonDetailTitle} >
              {`Premiere date: `}
              <Text style={styles.cartoonDetailValue} >{premiere_date}</Text>
            </Text>
            <Text style={styles.cartoonDetailTitle} >
              {`Current season: `}
              <Text style={styles.cartoonDetailValue} >{current_season}</Text>
            </Text>
          </View>

        </TouchableOpacity>
      )
    })
  }
  render() {
    return (
      <ScrollView style={styles.container} >
        {this._renderCartoonList()}
      </ScrollView>
    )
  }
}

CartoonList.defaultProps = {
  onPress: () => { },
}