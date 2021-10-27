import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import TicketTable from '../../components/ticketTable/Ticket.table.com'
import tickets from '../../assets/data/dummy.json'
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs.comp'
const DashBoard = () => {
    return (
       <Container>
           <Row>
               <Col>
               <BreadCrumbs page="Dashboard"/>
               </Col>
           </Row>
           <Row>
               <Col className="text-center mt-5 mb-2">
               <Button variant="info"
            style={{fontSize:"2rem",
            padding:"10px 30px"}}>Add New Ticket</Button>
               </Col>
           </Row>
           <Row>
               <Col className="text-center mb-2">
              <div>Total Tickets : 50</div>
              <div>Pending Tickets : 5</div>
               </Col>
           </Row>
           <Row>
               <Col className="mt-2">
              <div>Recently Added tickets</div>
             
               </Col>
           </Row>

           <Row>
               <Col className="recent-ticket">
              <TicketTable tickets={tickets}/>
             
               </Col>
           </Row>
       </Container>
    )
}

export default DashBoard
