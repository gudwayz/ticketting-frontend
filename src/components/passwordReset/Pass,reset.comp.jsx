
import React from 'react'
import propTypes from 'prop-types'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

const PassReset = ({handleOnChange,handleOnResetSubmit, formSwitcher, email,pass }) => {
   
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Reset Password</h1>
                <hr/>
                <Form onSubmit={handleOnResetSubmit}>
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

                     <br/>
                    
                    <Button type="submit">Reset Password</Button>
                    
                </Form>

                </Col>
            </Row>
            <hr/>
            <Row>
                        <Col>
                            <a href="#!" onClick={()=>{formSwitcher("Login")}}>Go to Login?</a>
                        </Col>
                    </Row>
        </Container>
    )
}
PassReset.propTypes = {
    handleOnChange:propTypes.func.isRequired,
    email:propTypes.string.isRequired,
    
}

export default PassReset
