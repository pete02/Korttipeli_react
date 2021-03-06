import React, {usestate, useState, Component} from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect
} from 'react-router-dom'

//sivut
import mainpage from './pages/index'
import P1 from './pages/p1';
import P2 from './pages/p2';
import P3 from './pages/p3';
import P4 from './pages/p4';
import P5 from './pages/p5';


class App extends Component{
  
  render(){
    return <Router>
      <Switch>
        <Route exact path="/" component={mainpage}/>
        <Route exact path="/p1" component={P1}/> 
        <Route exact path="/p2" component={P2}/> 
        <Route exact path="/p3" component={P3}/> 
        <Route exact path="/p4" component={P4}/> 
        <Route exact path="/p5" component={P5}/> 
        <Redirect to="/"/>
      </Switch>
    </Router>


  }
}
export default App;
