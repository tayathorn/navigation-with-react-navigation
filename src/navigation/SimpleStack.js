import { StackNavigator } from 'react-navigation'

import CartoonFeed from '../Screen/CartoonFeed'
import CartoonDetail from '../Screen/CartoonDetail'

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