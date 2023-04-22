import Navbar from './components/Navbar';
import './App.css';
import React,{ Component } from 'react';
import Baseapp from './components/Baseapp'
import Groupapp from './components/Groupapp'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render(){
    return(
      <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><Baseapp/></Route>
          <Route exact path="/groups"><Groupapp/></Route>
        </Switch>
        </Router> 
      </div>
    )
  }
}

