import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import User from './user';

export class EditUser extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
 
    }
    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:7027/api/Users'+User,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
            UserId:event.target.UserId.value,
            UserName:event.target.UserName.value
            })
        })
        .then(res=> res.json())
        .then((result)=>{
            alert('Failed');
        })

    }
    render(){
        return(
            
            <div className='container'>
                 <h3>Edit User page</h3>
               
                <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                    <Modal.Header clooseButton>
                        <Modal.Titel id="contained-modal-title-vcenter">
                            Edit User
                        </Modal.Titel>
                    </Modal.Header>
                    <Modal.Body>
                        <Row >
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="UserId">
                                        <Form.Label>User Id</Form.Label>
                                        <Form.Control type="text" name="UserId" required
                                        disabled
                                        defaultValue={this.props.useid}
                                        placeholder="UserName"/>
                                    </Form.Group>
                                    <Form.Group controlId="UserName">
                                      <Form.Label>UserName</Form.Label>
                                      <Form.Control type="text" name="UserName" required 
                                    defaultValue={this.props.usename}
                                    placeholder="UsertName"/>
                                </Form.Group>

                              <Form.Group>
                               <Button variant="primary" type="submit">
                                  Update User
                              </Button>
                            </Form.Group>
                                </Form>
                            </Col>


                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}
export default EditUser