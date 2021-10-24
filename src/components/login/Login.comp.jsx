
import React from 'react'
import propTypes from 'prop-types'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

const Login = ({handleOnChange,handleOnSubmit, formSwitcher, email,pass }) => {
   
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Client Login</h1>
                <hr/>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control required
                         placeholder ="Enter Email" 
                         type="email" 
                         value={email}
                         onChange={handleOnChange} 
                         name="email"
                          />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control required
                        placeholder ="Enter password" 
                        onChange={handleOnChange} 
                        type="password" 
                        value={pass}
                        name="password" />
                    </Form.Group>
                    <br/>
                    
                    <Button type="submit">Login</Button>
                    
                </Form>

                </Col>
            </Row>
            <hr/>
            <Row>
                        <Col>
                            <a href="#!" onClick={()=>{formSwitcher("Reset")}}>Forgot password?</a>
                        </Col>
                    </Row>
        </Container>
    )
}
Login.propTypes = {
    handleOnChange:propTypes.func.isRequired,
    email:propTypes.string.isRequired,
    pass:propTypes.string.isRequired
}

export default Login
