import React, { Component } from "react";
//import {Link} from 'react-router-dom';
import Login from './login';

export class Hom extends Component {
  render() {
    return (
      <div>
      
        <header
          style={{
            backgroundColor: "SlateBlue",
            color: "#fff",
            padding: "10px",
            textAlign: "center",
           
          }}
        >
          <h3>Welcom To Home Page</h3>
         
        </header>
       
        <p style={{fontSize:30}}> Home page for Dummy project</p>
        <Login/>
      </div>
    );
  }
}
export default Hom;
