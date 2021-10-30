import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs.comp'
import tickets from '../../assets/data/dummy.json'
import { MessageHistory } from '../../components/message-history/MesageHistory.comp';
import UpdateTicket from '../../components/update-ticket/UpdateTicket.comp';
const Ticket = tickets[0];


export const TicketDetails = () => {
    
    const[message, setMessage] = useState('')
    useEffect(()=>{},[message])
    const handleOnChange=e=>{
     setMessage(e.target.value)   
    };
    const handleOnSubmit=e=>{
        alert('forms sumbmitted successfully')
    }

    return (
        <Container>
            <Row>
                <Col>
                <BreadCrumbs page="Ticket Details"/>
                </Col>
            </Row>
            <Row>
                <Col className="font-weight-bolder text-secondary">
                
                <div className="isueDate">Issue-Date:{Ticket.openedAt}</div>
                <div className="issue">issues:{Ticket.issue}</div>
                <div className="status">Status:{Ticket.status}</div>
                </Col>
            
                <Col className="text-right">
                <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                <MessageHistory msg={Ticket.messageHistory}/>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                <UpdateTicket msg={message}
                 handleOnChange={handleOnChange}
                 handleOnSubmit={handleOnSubmit}/>
                </Col>
            </Row>

        </Container>
    )
}
