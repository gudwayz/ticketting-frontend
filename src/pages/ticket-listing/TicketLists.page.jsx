import React, { useEffect, useState } from 'react'
import {Col, Container, Row, Button } from 'react-bootstrap'
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs.comp'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import TicketTable from '../../components/ticketTable/Ticket.table.com'
import tickets from '../../assets/data/dummy.json'
import PropTypes from 'prop-types'

const TicketLists = () => {
    const[str, setStr]= useState('');
    const[displayticket, setDisplayTicket]= useState(tickets);
    useEffect(()=>{
        
    },[str, displayticket])

    const handleOnChange=e=>{
        const {value}=e.target
        setStr(value)
        searchticket(value)

    }
    const searchticket = sttr=>{
const displayticket = tickets.filter(row=>row.issue.toLowerCase().includes(sttr.toLowerCase()));
setDisplayTicket(displayticket)
    }
    return (
        <Container>
            <Row>
                <Col>
               <BreadCrumbs page="Ticket Lists"/>
                </Col>
            </Row>
            <Row>
                <Col className="mt-4">
                    <Button variant="info">Add New Tickets</Button>
                </Col>
                <Col className="text-right mt-4">
                    <SearchForm handleOnChange={handleOnChange} str={str}/>
                </Col>
            </Row>
            <hr/>
            <Row className="mt-4">
                <Col>
              <TicketTable tickets={displayticket}/>
                </Col>
            </Row>

        </Container>
    )
}

TicketTable.propTypes = {
    tickets: PropTypes.array.isRequired
}
export default TicketLists
