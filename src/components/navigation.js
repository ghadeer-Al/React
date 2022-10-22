import React from "react"

const Navigation=()=>{
    return (
        <div className ="appheader">
             <header style= {{
                    backgroundColor: 'DodgerBlue',
                    color: '#fff',
                    padding: "10px",
                    textAlign: "center"
    
                }}>
                    <h3 >React JS with Web API</h3>
                    <h4> Dummy Project</h4>
                </header>
       
    <nav className ="navbar navbar-expend-sm bg-light navbar-dark">
        {/* <a href ="/" className="List">List</a> */}
        <ul className=" navbar-nav">
            <li className="nav-item- m-1">
            <a href ="/Hom" >Home</a>
            </li>
            <li className="nav-item- m-1">
            <a href ="/User" >User</a>
            </li>
            <li className="nav-item- m-1">
            <a href ="/AddUser" >Add User</a>
            </li>
            <li className="nav-item- m-1">
            <a href ="/Edie" >Edit</a>
            </li>
            {/* <li className="nav-item- m-1">
            <a href ="/Delete" >Delete</a>
            </li> */}
        </ul>
    </nav>
    </div>

)}

export default Navigation