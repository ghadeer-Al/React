//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import './index.css';
//import Button from 'react-bootstrap/Button'
import Hom from './Hom'
import User from './User'
import {addUser} from './components/addUser'
import{ BrowserRouter, Routes, Route, } from 'react-router-dom'
//import {Link} from 'react-router-dom';
import Navigation from './Navigation'
import AppHeader from './AppHeader';
import EditUser from './components/edit';

function App (){
  return (
    <div className="container">
      {/* <h3>React JS with Web API</h3> */}
      <BrowserRouter>
     <Routes>
      <Route path ='/hom' element= {<Hom/> } />
      <Route path ='/user' element= {<User/> } />
      <Route path="/AddUser" element= {<addUser/>}/>
      <Route path="/EditUser" element={<EditUser/>} />
      
     </Routes>
      </BrowserRouter>
      <addUser/>
  </div>
  );
  
}
export default App;

