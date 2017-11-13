import { TabNavigator } from 'react-navigation'

import FavoriteMusic from '../Screen/Music/FavoriteMusic'

const SimpleTab = TabNavigator({
  Home: {
    screen: FavoriteMusic,
  },
  Lyric: {
    screen: FavoriteMusic,
  },
})

export default SimpleTab