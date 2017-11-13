import React from 'react'
import {
  Image,
  StyleSheet,
} from 'react-native'
import { TabNavigator } from 'react-navigation'

// utils
import colorBase from '../utils/colorBase'

// Screen
import FavoriteMusic from '../Screen/Music/FavoriteMusic'
import ArtistList from '../Screen/Artist/ArtistList'

// icon
import musicIcon from '../images/icon/music-player.png'
import artistIcon from '../images/icon/microphone.png'

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  }
})

function renderTabBarIcon(icon, tintColor) {
  return(
    <Image
      source={icon}
      style={[styles.icon, { tintColor: tintColor }]}
    />
  )
}

const SimpleTab = TabNavigator({
  Home: {
    screen: FavoriteMusic,
    navigationOptions: () => ({
      title: 'My Music',
      tabBarIcon: ({ tintColor }) => (
        renderTabBarIcon(musicIcon, tintColor)
      ),
    })

  },
  Lyric: {
    screen: ArtistList,
    navigationOptions: () => ({
      title: 'Artist',
      tabBarIcon: ({ tintColor }) => (
        renderTabBarIcon(artistIcon, tintColor)
      ),
    })
  },
},
{
  tabBarOptions: {
    activeTintColor: colorBase.pink,
    inactiveTintColor: colorBase.darkGray,
  },
})

export default SimpleTab