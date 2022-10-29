import React from "react"

const Navigation=()=>{
    return (
        <div className ="appheader">
             <header>
                    <h3 style={{backgroundColor: 'DodgerBlue', fontSize: 40, margin: '0 auto', textAlign: 'center', padding: '8px', color: '#fff' }}>React JS with Web API</h3>
                    <h4 style={{backgroundColor: 'DodgerBlue', fontSize: 30, margin: ' 0auto', textAlign: 'center', padding: '6px', color: '#fff' }}> Dummy Project</h4>
                    
                </header>
       
    <nav className ="navbar navbar-expend-sm bg-light navbar-dark " >
        
        <ul className=" navbar-nav"  style={{ fontSize: 25,  padding: '1px' }}>
            <li  >
            <a className=" m-2" href ="/Hom" >Home</a>
           
            <a className=" m-2" href ="/User" >User</a>
           
            <a className=" m-2" href ="/AddUser" >Add User</a>
           
            <a className=" m-2" href ="/Edie" >Edit</a>
            </li>
           
        </ul>
    </nav>
    </div>

)}

export default Navigation