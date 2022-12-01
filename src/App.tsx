//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import './index.css';
//import Button from 'react-bootstrap/Button'
import Hom from './components/hom';
import User from './components/user';
//  import addUser from './components/addUser'
import{ BrowserRouter, Routes, Route, } from 'react-router-dom'
//import {Link} from 'react-router-dom';
// import Navigation from './Navigation'
// import AppHeader from './AppHeader';
import Navigation from "./components/navigation";
import EditUser from './components/edit';
import AddUser from './components/addUser';

function App (){
  return (
    
    <div className="container">
      <Navigation />
      {/* <h3>React JS with Web API</h3> */}
      <BrowserRouter>
     <Routes>
      <Route path ='/hom' element= {<Hom/> } />
      <Route path ='/user' element= {<User/> } />
      {/* <Route path="/AddUser" element= {<AddUser/>}/> */}
      {/* <Route path="/EditUser" element={<EditUser/>} /> */}
      <Route path="/AddUser" element={<AddUser />} />
      <Route path="/Edit/:id" element={<EditUser />}></Route>
      
     </Routes>
      </BrowserRouter>
      {/* <addUser/> */}
  </div>
  );
  
}
export default App;

