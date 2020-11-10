import React from 'react'
import { Button, Col, Container, Input, Row } from 'reactstrap'
import items from './constants/items.data'

const Header = () => {
    return (
        <div style={{ backgroundColor: '#060606' }}>
            <Container>
                <Row className='align-items-center py-2'>
                    <Col>
                        <h4 className='font-weight-bold'>React <span className='text-success'>YTS</span></h4>
                    </Col>
                    <Col md={4} className='d-flex justify-content-between'>
                        {items && items.map(item => (
                            <h6 className='text-white'>{item}</h6>
                        ))}
                    </Col>
                    {/* <Col>
                        <Input placeholder='Search a Movie' />
                    </Col> */}
                </Row>
            </Container>
        </div>

    )
}

export default Header
