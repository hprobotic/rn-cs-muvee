import React from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import styles from './styles';

const RenderMovieItem = (props) => (
<View style={styles.movieItem}>
  <Text style={{ padding: 20 }}>
    {props.movie.title}
</Text>
</View>)

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [
        {
          key: 1,
          title: 'hello1'
        },
        {
          key: 2,
          title: 'hello 2'
        }
      ]
    }
  }
  render() {
    const { movies } = this.state;
    return (
      <View style={styles.homeContainer}>
        <FlatList data={movies} renderItem={({item}) => <RenderMovieItem movie={item} /> } />
      </View>
    )
  }
}

export default Home
