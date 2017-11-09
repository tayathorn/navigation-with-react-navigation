import { StackNavigator } from 'react-navigation'

import CartoonFeed from '../Screen/CartoonFeed'

const SimpleStack = StackNavigator({
  CartoonFeed: {
    screen: CartoonFeed,
  }
},
{
  headerMode: 'none',
}
)

export default SimpleStack