import React, { Component } from 'react';
import '../styles/Landing.css'
import User from './User'

  class Landing extends Component {
    
    constructor(){
        super()
        this.state ={
            users:[
                {name:'Eitan', backgroundColor:'blue'},
                {name:'Ido', backgroundColor:'green'},
                {name:'Yuval', backgroundColor:'yellow'}
            ]
        }
    }
    render() {
        return (
            <div>
                <h1 >Who's Watching?</h1>
                <div id="user-container">
                    {this.state.users.map(user => <User key={'user ' + user.name} user={user}/>)}
                </div>
            </div>
        )
    }
    
  }
        
export default Landing;

