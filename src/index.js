
// import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Hom from './components/hom';
import User from './components/user';
import AddUser from './components/addUser';
import EditUser from './components/edit';

import Navigation from './components/navigation';

export default function App() {

  return (<>
   
    <Navigation/>
   
   
   <BrowserRouter>
    <Routes>
    
          <Route path="/Hom" element={<Hom />}/>
          <Route path="/User" element={<User />} />
          <Route path="/AddUser" element= {<AddUser/>}/>
          <Route path="*" element={<EditUser/>} />
       
      </Routes>
    </BrowserRouter>
  </>
   
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);