import { StackNavigator } from 'react-navigation'

import CartoonFeed from '../Screen/Cartoon/CartoonFeed'
import CartoonDetail from '../Screen/Cartoon/CartoonDetail'

const SimpleStack = StackNavigator({
  CartoonFeed: {
    screen: CartoonFeed,
  },
  CartoonDetail: {
    screen: CartoonDetail,
  }
},
{
  initialRouteName: 'CartoonFeed',
  headerMode: 'none',
}
)

export default SimpleStack