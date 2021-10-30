import React from 'react'
import { Form, Button} from 'react-bootstrap'

 const UpdateTicket= ({msg, handleOnChange, handleOnSubmit}) => {
    return (
       <Form onSubmit={handleOnSubmit}>
           <Form.Label>Reply</Form.Label><br/>
           <Form.Text>Please reply your message or update your tickets</Form.Text>
           <Form.Control
           as="textarea"
           value={msg}
           onChange={handleOnChange}
           row="10"
           name="detail"
           />
           <div className="text-right mt-4">
                <Button variant="info" type="submit">
                    Reply
                </Button>
            </div>
           
       </Form>   
    )
}
export default UpdateTicket