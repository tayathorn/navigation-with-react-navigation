import {
  StyleSheet,
} from 'react-native'

import { StackNavigator } from 'react-navigation'

import colorBase from '../utils/colorBase'

import Home from '../Screen/Home'

const styles = StyleSheet.create({
  defaultNavHeaderStyle: {
    backgroundColor: colorBase.white,
  },

  defaultNavTitleStyle: {
    color: colorBase.pink,
  },
})

export const RootApp = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'React Navigation',
      headerStyle: styles.defaultNavHeaderStyle,
      headerTitleStyle: styles.defaultNavTitleStyle,
    })
  },
})