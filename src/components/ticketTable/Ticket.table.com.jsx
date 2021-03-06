import React from 'react'
import { Table } from 'react-bootstrap'

const TicketTable = ({tickets}) => {
    return(  
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>issues</th>
                    <th>status</th>
                    <th>open Date</th>
                </tr>
            </thead>
            <tbody>
                {tickets.length ? (tickets.map(row=>
                <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.issue}</td>
                <td>{row.status}</td>
                <td>{row.openedAt}</td>
            </tr>)
                    
                ):
                <tr>
                    <td colSpan="4" className="text-center">No ticket to show</td>
                    
                </tr>
                }
                

                
            </tbody>
        </Table>
          )
}

export default TicketTable
