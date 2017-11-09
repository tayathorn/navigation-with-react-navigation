import {
  StyleSheet,
} from 'react-native'

import { StackNavigator } from 'react-navigation'

import colorBase from '../utils/colorBase'

import Home from '../Screen/Home'
import CartoonList from '../Screen/CartoonList'
import { navigationOption } from './config'


export const HomeRoutes = {
  SimpleStack: {
    name: 'Stack Example',
    description: 'A card stack - CartoonList',
    screen: CartoonList,
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
      headerBackTitle: 'Home',
      ...navigationOption
    })
  },
},
  {
    initialRouteName: 'Home',
  }
)

