import React, {Component }from "react";
import { Button } from "react-bootstrap";

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
                const{ user,setData}= this.state;
             
             async function deleteOperation(id){
                console.log(id);
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
                       <h4 style={{textAlign : 'center', fontSize: 40 }}  >User List</h4>
                      
               <table className="table table-striped" style={{ marginTop: 10}}>
                <thead>
                    <tr>
                        <th style={{ fontSize:23  }}  >UserName</th>
                        <th style={{ fontSize:23  }}  >Status</th>
                        <th style={{ fontSize:23  }}  >Operations</th>
                        
                    </tr>
                </thead>
              
               
                       {
                        
                        user.map((user)=>(
                            <tr>
                            <td key ={ user.id}>
                                {user.  username}
                                {/* Password:{user.password}, */}
                               
                            </td>
                            <td> {user.status}</td>
                            <td>
                               <Button onClick={()=>deleteOperation(user.id)} style={{backgroundColor:'red',
                               color: '#fff',
                               padding:' 3px'
                            }}  >Delete</Button> 
                            </td>
                            </tr>
                            
                            
                        ))
                       }
                   
                           </table>
                    </div>
                );
             }
            }
 
        
        export default User;
 
