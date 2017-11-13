import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import FavMusicList from '../../components/FavMusicList'

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'white',
  },
})

export default class FavoriteMusic extends Component {
  render() {
    return(
      <View style={styles.container} >
        <FavMusicList />
      </View>
    )
  }
}

FavoriteMusic.navigationOptions = {
  // title: 'My Music'
}