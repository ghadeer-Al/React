
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AppHeader from './components/appHeader';
import {Hom} from './components/hom';
import {User} from './components/user';
import AddUser from './components/addUser';
import {EditUser} from './components/edit';
// import {Delete} from './components/delete';
import Navigation from './components/navigation';

export default function App() {

  return (<>
   
    <Navigation/>
    {/* <h3>React JS with Web API</h3> */}
   <BrowserRouter>
    <Routes>
          <Route path="/" element={<AppHeader />}/>
          <Route path="/Hom" element={<Hom />}/>
          <Route path="/User" element={<User />} />
          <Route path="/AddUser" element= {<AddUser/>}/>
          <Route path="/EditUser" element={<EditUser />} />
          {/* <Route path="/Delete" element= {<Delete/>}/> */}
      </Routes>
    </BrowserRouter>
  </>
   
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);