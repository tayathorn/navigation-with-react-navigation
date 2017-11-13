import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native'

import { music } from '../data/music'
import device from '../utils/device'
import colorBase from '../utils/colorBase'

const ALBUM_COVER_SIZE = 100
const ITEM_PER_ROW = 2
const ITEM_ROW_PADDING = 10

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: ITEM_ROW_PADDING,
  },

  musicWrapper: {
    width: calculateRowWidth() ,
  },

  imgWrapper: {
    borderRadius: 15,
  },

  coverImg: {
    // width: ALBUM_COVER_SIZE,
    // height: ALBUM_COVER_SIZE,
    width: calculateRowWidth(),
    height: calculateRowWidth(),
    borderRadius: 5,
  },

  detailWrapper: {
    paddingVertical: 10,
  },

  songDetail: {
    fontWeight: 'bold',
    color: colorBase.darkGray,
    // color: '#C2B4B1',
  },

  artistDetail: {
    // color: colorBase.whiteGray,
    color: '#C2B4B1',
  }
})

function calculateRowWidth() {
  return (device.screen.width - ((ITEM_PER_ROW + 1) * ITEM_ROW_PADDING)) / ITEM_PER_ROW
}

export default class FavMusicList extends Component {

  _renderMusicList = () => {
    return music.favorite.map((fav) => {
      let { id, song, artist, albumcover } = fav
      return (
        <TouchableOpacity
          key={id}
          style={styles.musicWrapper}
        //onPress={() => this.props.onPress(name, gallery)}
        >
          <View style={styles.imgWrapper} >
            <Image style={styles.coverImg} source={{ uri: albumcover }} />
          </View>
          <View style={styles.detailWrapper} >
            <Text style={styles.songDetail} >{song}</Text>
            <Text style={styles.artistDetail} >{artist}</Text>
          </View>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <ScrollView style={styles.container} >
        <View style={styles.wrapper} >
          {this._renderMusicList()}
        </View>
      </ScrollView>
    )
  }
}