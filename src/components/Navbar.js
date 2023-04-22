import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import Modal from './Modal
//import { useEffect,useState } from 'react';

const CLIENT_ID = "aaaae76a77c2c4c59cd8";
const REDIRECT_URL = "http://localhost:3000/"
export class Navbar extends Component {
  constructor(){
    super();
    this.state={
      rerender: false
    }
  }
  //const [rerender,setRerender] = useState(false);
  githublogin = async()=>{
    window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID + "&scope=repo&redirect_uri=" + REDIRECT_URL +"&state=randomstring");
  };

  async componentDidMount(){
    const querysearch = window.location.search;
    const urlParams = new URLSearchParams(querysearch);
    const codeParam = urlParams.get("code");
    console.log(codeParam);
    if(codeParam && (localStorage.getItem("acces_tokenn")===null)){
      const getaccesstokan = async()=>{
        await fetch("http://localhost:4000/accessToken?code="+urlParams.get("code"),{
          method:"GET"
        }).then((response)=>{
          console.log(response)
          return response.json();
        }).then((data)=>{
          console.log(data);
          if(data.access_token){
            localStorage.setItem("access_tokenn",data.access_token);
            this.setState({rerender: false})
          }
        })
      };
      getaccesstokan();
    }
  }

  githubuserdata = async()=>{
    await fetch("http://localhost:4000/getuserdata",{
      method:"GET",
      header:{
        "Authorization": "Bearer" + localStorage.getItem("access_token")
      }
    }).then((response)=>{
      return response.json();
    }).then((data)=>{
      console.log(data);
    })
  };
  
  
  render(){
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">ImgCloud</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Normal</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/groups">Custom</Link></li>
            </ul>
          </div>
        </div>
        {localStorage.getItem("access_tokenn")?
        <>
        <button className="btn btn-outline-success my-2 my-sm-0 mx-2" onClick={()=>{localStorage.removeItem("access_tokenn"); this.setState({rerender: false})}} style={{width:`100px`}} type="submit">Sign out</button>

        </>
        :
        <>
        <button className="btn btn-outline-success my-2 my-sm-0 mx-2" onClick={this.githublogin} style={{width:`100px`}} type="submit">Log in</button>
        </>}
      </nav>
      </>
    )
  }
}

export default Navbar


