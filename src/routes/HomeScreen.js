import React from 'react'
import { HomePage } from '../components'

class HomeScreen extends React.Component {
  static navigationOption = ({
    title: 'HomeScreen'
  })
  render() {
    const { navigation  } = this.props
    return(
      <HomePage navigation={navigation} />
    )
  }
}

export default HomeScreen

