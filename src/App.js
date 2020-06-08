import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import Landing from './components/Landing';
import Catalog from './components/Catalog';

  class App extends Component {
  
    render() {
      return (
        <Router>
          <div>
            <div className="app">
              <div id="main-links">
                <div id='links'>
                  <Link to="/">Home</Link>
                  <Link to="/catalog">Catalog</Link>
                </div>
                <div id="logo">REFLIX</div>
              </div>
              <Route path="/" exact component={Landing}/>
              <Route path="/catalog" exact component={Catalog}/>
                {/* <Route path="/" exact component={Home}/> 
                <Route path="/about" exact render={() => <About items={Object.keys(state)} />} />
                <Route path="/directory/:fentities" exact render={({ match }) => <Fentities match={match} state={state}/>}/> 
                <Route path="/directory/:fentities/:name" exact render={({match}) => <Fentity match={match} state={state}/>}/>
                <Route path="/notFound" exact render={()=><NotFound />}/> */}
              </div>
          </div>
        </Router>
        )
    }
    
  }
        
export default App;

