import {
  StyleSheet,
} from 'react-native'

import { StackNavigator } from 'react-navigation'

import colorBase from '../utils/colorBase'

import Home from '../Screen/Home'

import SimpleStack from './SimpleStack'

import { navigationOption } from './config'



export const HomeRoutes = {
  SimpleStack: {
    name: 'Stack Example',
    description: 'A card stack - CartoonFeed',
    screen: SimpleStack,
    navigationOptions: () => ({
      ...navigationOption,
    })
  }
}

export const RootApp = StackNavigator({
  ...HomeRoutes,
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'React Navigation',
      ...navigationOption
    })
  },
},
  {
    initialRouteName: 'Home',
  }
)

