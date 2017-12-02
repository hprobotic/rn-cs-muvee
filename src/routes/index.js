import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen.js'

const Routes = TabNavigator({
  HomeScreen:{ screen: HomeScreen },
  HomeScreen2: { screen: HomeScreen}
},{
  animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
)

export default Routes
