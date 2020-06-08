import React, { Component } from 'react';
import Movie from './Movies'

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
      const rentedMovies = this.props.moviesData.filter(movie => movie.isRented)
      const notRentedMovies = this.props.moviesData.filter(movie => !movie.isRented)
    return (
          <div id='catalog'>
            <div id="nav-bar">
              <input type="text" id='search-bar' placeholder='Search'/>
              <h5>Budget: ${this.props.budget}.00</h5>
            </div>
            <h5>Rented:</h5>
            <div id="rented-movies">
              {rentedMovies.length ? 
              rentedMovies.map((movie,i)=> <Movie key={movie.title +' info rented'+ i} movieInfo={movie} changeMovieStatus={this.changeMovieStatus}/>)
              : <h2>No movies rented yet..</h2>
              }
            </div>
            <h5>Catalog:</h5>
            <div id="movies-catalog">
              {notRentedMovies.map((movie,i) => <Movie key={movie.title +' info'+ i} movieInfo={movie} changeMovieStatus={this.changeMovieStatus}/>)}
            </div>
          </div>

          )
    }
    
  }
        
export default Catalog;
