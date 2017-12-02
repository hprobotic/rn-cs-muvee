// @flow
import React from 'react'
import { compose, lifecycle } from 'recompose'
import Home from './Home'
import { getMovies } from '../../services'

const MoviesType = {
  topRated: 'topRated',
  nowPlaying: 'nowPlaying'
}


class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      movies: []
    }
  }

  const getListMovies = (type) => {
    console.log('Fetching for: ', type)
      getMovies(type).then(data => {
        this.setState({movies: data.results, loading: false})
      })
  }

  componentDidMount () {
    this.setState({
      loading: true
    }, getListMovies(MoviesType.topRated))
  }

  render() {
    const { movies, loading } = this.state
    return <Home movies={movies} loading />
  }
}

export default HomeContainer
