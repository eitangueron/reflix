import React, { Component } from 'react';
import {Link} from 'react-router-dom'

  class User extends Component {
  
    render() {
        const user = this.props.user
    return <div className='user' style={{backgroundColor: user.backgroundColor}} ><Link to="/catalog">{user.name}</Link></div>
    }
    
  }
        
export default User;

