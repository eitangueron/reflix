import React, { Component } from 'react';
import '../styles/Movie.css'

  class MovieDetail extends Component {
  
    render() {
        const movieData = this.props.moviesData.find(movie => movie.id == this.props.match.params.id)
    return <div className='movie'>
            <h2>{movieData.title} {' ('}{movieData.year}{')'}</h2>
            <img src={movieData.img} className='movie-img'/>
            <p>{movieData.descrShort}</p>
        </div>
    }
    
  }
        
export default MovieDetail
;

