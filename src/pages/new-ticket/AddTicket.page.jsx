import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm.comp'
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs.comp'

const initialFrmData = {
    issue:"",
    issueDate: "",
    details:""
}

const AddTicket = () => {
    const[frmData, setFrmData] = useState(initialFrmData);
    useEffect(()=>{},[frmData])
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFrmData({
        ...frmData,
            [name]:value,
        })
        
    }
        
    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log('form has been submitted')
        }
    
    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumbs page="New Ticket"/>
                </Col>
            </Row>

            <Row>
                <Col>
                  <AddTicketForm 
                  handleOnChange={handleOnChange}
                  handleOnSubmit={handleOnSubmit}
                  frmDt={frmData}/>
                </Col>
            </Row>
        </Container>
    )
}



export default AddTicket
