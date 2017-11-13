import {
  Platform,
  Dimensions,
} from 'react-native'

const device = {
  isAndroid: Platform.OS === 'android',
  screen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
}

export default device
