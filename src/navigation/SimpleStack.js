import { StackNavigator } from 'react-navigation'

import CartoonList from '../Screen/CartoonList'

const SimpleStack = StackNavigator({
  CartoonList: {
    screen: CartoonList,
  }
},
{
  headerMode: 'none',
}
)

export default SimpleStack