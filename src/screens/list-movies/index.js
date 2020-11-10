import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { YTS } from '../../core'
import { Movies, MoviesPagination } from './components'

const ListMovies = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const page = params.get('page');

    return (
        <Container>
            <Row>
                <Col>
                    <h4 className='font-weight-bold'>Movies</h4>
                </Col>
            </Row>
            <Movies page={page} />

        </Container >
    )
}

export default ListMovies
