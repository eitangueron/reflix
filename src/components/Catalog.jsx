import React, { Component } from 'react';
import Movie from './Movie'

  class Catalog extends Component {

    changeMovieStatus = (moviesID) => {
      const movieToChangeIndex = this.props.moviesData.findIndex(movie => movie.id === moviesID)
      const newMoviesData = [...this.props.moviesData]
      const movie = newMoviesData[movieToChangeIndex]
      movie.isRented ? movie.isRented = false : movie.isRented = true
      this.setState({
        moviesData : newMoviesData
      })
    }

    render() {
    return (
          <div id='catalog'>
            <input type="text" id='search-bar' placeholder='Search'/>
            <h5>Catalog:</h5>
            <div id="movies-catalog">
              {this.props.moviesData.map((movie,i) => <Movie key={movie.title +' info'+ i} movieInfo={movie} changeMovieStatus={this.changeMovieStatus}/>)}
            </div>
          </div>

          )
    }
    
  }
        
export default Catalog;
