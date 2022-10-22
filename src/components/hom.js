import React, {Component}from "react";
//import {Link} from 'react-router-dom';

export class Hom extends Component{
    render(){
        
        return(
            <div>
                <header style= {{
                    backgroundColor: 'mediumblue',
                    color: '#fff',
                    padding: "10px"
                }}>
                    <h3 className="d-flex justify-content-center m-3">Welcom To Home Page</h3>  
                    
                </header>
                {/* <button>create new </button>  */}

             {/* <h3>Welcom To Home Page</h3>     */}
             </div>
        )
    }
}
export default Hom;