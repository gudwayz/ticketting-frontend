import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const SearchForm = ({handleOnChange, str}) => {
    return (
        <div>
            <Form>
                <Form.Group as ={Row}>
                    <Form.Label column sm={2}>Search</Form.Label>
                    <Col sm="10">
                    <Form.Control
                    name="SearchStr"
                    val={str}
                    onChange={handleOnChange}
                    placeholder="search..."
                    />
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

SearchForm.propTypes ={
    handleOnChange:PropTypes.func.isRequired,
     str:PropTypes.string.isRequired
}
