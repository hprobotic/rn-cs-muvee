import { StyleSheet } from 'react-native'
import { extend } from 'lodash'
import { styles, colors } from 'commons'


const homeStyle = StyleSheet.create(extend(styles.general, {
  homeContainer: {
    paddingTop: 64
  },
  homeText: {
    color: colors.purple.base
  }
}))



export default homeStyle
