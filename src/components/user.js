import React, {Component }from "react";
import { Button } from "react-bootstrap";
//import React from 'react';
import Table  from './Table';
//import './index.css';
//import './App.css';
//import axios from 'axios';
//import { useResolvedPath } from "react-router-dom";
//const apiUrl = 'https://localhost:7027/api/Users';

export  class User extends Component{
   
        constructor(props){
            super(props);
            this.state= {user:[],
            DataisLoaded:false};
        }
        
        componentDidMount(){
            
            fetch('https://localhost:7027/api/Users')
            .then(res =>res.json()) 
              .then((json)=>{
                this.setState({
                  user: json,
                  DataisLoaded: true
                });
              }) 
                
            }
          
            render(){
                const{DataisLoaded, user,setData}= this.state;
                // if (!DataisLoaded)return <div>
                // <h1> Pleses wait some time.... </h1> </div> ;
             async function deleteOperation(id){
                console.log('44444',id);
             let result=await fetch('https://localhost:7027/api/Users/'+id,{
                method:"Delete"
             });
             
            result = await result.json();
            console.warn(result)
            getData();
            }
            async function getData()
                {
                let result = await fetch('https://localhost:7027/api/Users');
                result = await result.json();
                setData(result)
                }


                return(
                    <div>
                       <h4 align="center" >User List</h4>
                      
               <table className="table table-striped" style={{ marginTop: 10}}>
                <thead>
                    <tr>
                        <th >UserName</th>
                        <th>Status</th>
                        <th>Operations</th>
                        
                    </tr>
                </thead>
              
               
                       {
                        
                        user.map((user)=>(
                            <tr>
                            <td key ={ user.id}>
                                {user.username}
                                {/* Password:{user.password}, */}
                               
                            </td>
                            <td> {user.status}</td>
                            <td>
                               <Button onClick={()=>deleteOperation(user.id)} style={{backgroundColor:'red',
                               color: '#fff',
                            padding:' 3px', borderRadius: '5px', cursor: 'pointer' 
                            }}  >Delete</Button> 
                            </td>
                            </tr>
                            
                            
                        ))
                       }
                    {/* here */
                    // <button noClick={postPutEvent}> submit </button>
                    /* here */}
                           </table>
                    </div>
                );
             }
            }
 
        
        export default User;
 
