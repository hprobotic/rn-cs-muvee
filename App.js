import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from 'commons'
import Routes from './src/routes'

const baseStyles = StyleSheet.create(styles.general)

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}> 
        <Routes />
      </View>
    );
  }
}


