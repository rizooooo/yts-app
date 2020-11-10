import React from 'react'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import { YTS } from '../../../../core'

const MovieSuggestions = ({ movie_id }) => {
    const { push, replace } = useHistory();
    const { data, isFetching } = useQuery(`movie_suggestion_${movie_id}`, async () => YTS.GET_MOVIE_SUGGESTIONS({ params: { movie_id } }), { refetchOnWindowFocus: false })

    if (isFetching) {
        return <h6>Fetching Suggestions...</h6>
    }

    const { data: { movies } } = data
    return (
        <>
            <Row className='row-cols-4'>
                {movies && movies.map(a =>
                    <Col className='d-flex flex-column' style={{ cursor: 'pointer' }} onClick={() => replace('/movies/' + a.id)}>
                        <img width={'100%'} src={a.medium_cover_image} />
                        <h6 className='mt-3 mb-0 font-weight-bold text-truncate'>{a.title}</h6>
                        {/* <small>{a.genres.join(', ')}</small> */}
                        <span>{a.year}</span>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default MovieSuggestions
