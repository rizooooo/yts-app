import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import items from './constants/items'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bg-secondary'>
            <Container>
                <Row className='py-5'>
                    {items && Object.keys(items).map(a => (
                        <Col>
                            <h5 className='font-weight-bold mb-3'>{items[a].header}</h5>
                            {items[a].items.map(c => (
                                <h6>{c}</h6>
                            ))}
                        </Col>
                    ))}
                </Row>
                <Row className='py-3'>
                    <Col>
                        <h5 className='font-weight-bold text-uppercase'>VolksLift</h5>
                    </Col>
                    <Col>
                        <h6 className='text-center'>VolksLift © 2020 all rights reserved.</h6>
                    </Col>
                    <Col className='d-flex justify-content-between align-items-center'>
                        <FaFacebook size={25} />
                        <FaInstagram size={25} />
                        <FaYoutube size={25} />
                        <FaTwitter size={25} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
