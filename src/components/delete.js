import React, { Component } from "react";

export class Delete extends Component{
    constructor(props){
        super(props);
        this.state={
            status: null
        };
    }
    componentDidMount(){
        fetch('https://localhost:7027/api/Users',{method:'DELETE'})
        .then(() => this.setState({
            status:'Delete successful'
        }));
    }
    render(){
        const {status}=this.state;
        return(
            <div className='card text-center m-3'>
                <h5 className="card-header">Delete</h5>
                <div className="card-body">
                    Status: {status}
                </div>

            </div>

        );
    }

    

}
export default Delete;