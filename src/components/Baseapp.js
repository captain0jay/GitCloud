import React, { Component } from 'react'
import Display from './Display'
import { Link } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
export class baseapp extends Component {
    render(){
        return(
            <>
            <Router>
            <div className="container mw-100">
                <div className='row mh-100'>
                    <div className="col-1 border w-25 mh-100 d-inline-block">
                        <div className='mw-100 border-bottom my-2'><Link className="lead text-decoration-none mw-100 link-secondary" to="/images">Images</Link></div>
                        <div className='mw-100 border-bottom my-2'><Link className="lead text-decoration-none mw-100 link-secondary" to="/videos">videos</Link></div>
                        <div className='mw-100 border-bottom my-2'><Link className="lead text-decoration-none mw-100 link-secondary" to="/audio">audio</Link></div>
                        <div className='mw-100 border-bottom my-2'><Link className="lead text-decoration-none mw-100 link-secondary" to="/others">others</Link></div>
                    </div>
                    <div className='col-7 border w-75 mh-100 d-inline-block'>
                        <Switch>
                            <Route path="/images"><Display data='images'/></Route>
                            <Route path="/videos"><Display data='videos'/></Route>
                            <Route path="/audio"><Display data='audio'/></Route>
                            <Route path="/others"><Display data='others'/></Route>
                        </Switch>
                    </div>
                </div> 
            </div>
            </Router>
            </>
        )
    }
}

export default baseapp