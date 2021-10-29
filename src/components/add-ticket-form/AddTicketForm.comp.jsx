import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import propTypes from 'prop-types'

const AddTicketForm = ({handleOnSubmit,handleOnChange, frmDt }) => {
    console.log(frmDt)
    return (
        <div className="card p-4 w-75 mx-auto">
           <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label  column sm={2}>Issues</Form.Label>
                    <Col sm={10}>
                        <Form.Control required
                            placeholder="issue"
                            type="text"
                            value={frmDt.issue}
                            onChange={handleOnChange}
                            name="issue"
                        />
                    </Col>
                    </Form.Group>
<br/>
                    <Form.Group as={Row}>
                        <Form.Label  column sm={2}>issueDate</Form.Label>
                    <Col sm={10}>
                        <Form.Control required

                            onChange={handleOnChange}
                            type="date"
                            value={frmDt.issueDate}
                            name="issueDate" />
                    </Col>
                    </Form.Group>
<br/>
                    <Form.Group>
                        <Form.Label>details</Form.Label>
                        <Form.Control required
                        as="textarea"
                        rows="7"
                        onChange={handleOnChange} 
                       
                        value={frmDt.details}
                        name="details" />
                    </Form.Group>
                    <br/>
                    
                    <Button type="submit" className="w-100" variant="info">Submit</Button>
                    
                </Form>

        </div>
    )
}

AddTicketForm.propTypes={
    handleOnSubmit:propTypes.func.isRequired,
    handleOnChange:propTypes.func.isRequired,
     frmDt :propTypes.object.isRequired
}
export default AddTicketForm
