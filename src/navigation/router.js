import {
  StyleSheet,
} from 'react-native'

import { StackNavigator } from 'react-navigation'

import colorBase from '../utils/colorBase'

import Home from '../Screen/Home'
import CartoonList from '../Screen/CartoonList'

const styles = StyleSheet.create({
  defaultNavHeaderStyle: {
    backgroundColor: colorBase.white,
  },

  defaultNavTitleStyle: {
    color: colorBase.pink,
  },
})

export const HomeRoutes = {
  SimpleStack: {
    name: 'Stack Example',
    description: 'A card stack - CartoonList',
    screen: CartoonList,
  }
}

export const RootApp = StackNavigator({
  ...HomeRoutes,
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'React Navigation',
      headerStyle: styles.defaultNavHeaderStyle,
      headerTitleStyle: styles.defaultNavTitleStyle,
    })
  },
}, 
{
  initialRouteName: 'Home',
}
)

