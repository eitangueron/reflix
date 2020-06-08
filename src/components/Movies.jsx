import React, { Component } from 'react';
import '../styles/Movies.css'
import {Link} from 'react-router-dom'

  class Movie extends Component {
    

    changeMovieStatus = () => {
        this.props.changeMovieStatus(this.props.movieInfo.id)
    }

    render() {
        return <div id={this.props.movieInfo.title} className='movie'>
                <Link to={`/catalog/${this.props.movieInfo.id}`}><img src={this.props.movieInfo.img}/></Link>
                {this.props.movieInfo.isRented ? <div className='unrent' onClick={this.changeMovieStatus}>-</div> : <div className='rent' onClick={this.changeMovieStatus}>+</div>}
            </div>
    }
    
  }
        
export default Movie;

