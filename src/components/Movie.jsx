import React, { Component } from 'react';
import '../styles/Movie.css'

  class Movie extends Component {
  
    render() {
        return <div id={this.props.movieInfo.title} className='movie'>
                <img src={this.props.movieInfo.img} alt=""/>
                {/* {this.props.movieInfo.isRented ? - : +} */}
            </div>
    }
    
  }
        
export default Movie;

