import React, { useState } from 'react'
import { usePaginatedQuery, useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import { MoviesPagination } from '..'
import { YTS } from '../../../../core'

const MovieList = ({ page }) => {
    console.log(page, 'ASD')
    const { isLoading,
        isError,
        error,
        resolvedData,
        latestData,
        isFetching
    } = usePaginatedQuery(['movie_list', page], async () => await YTS.GET_MOVIES({ params: { page } }), { refetchOnWindowFocus: false })

    const { push } = useHistory();

    const paginationHandler = ({ page: currentPage }) => {
        // console.log(data);

        console.log(!latestData || !latestData.hasMore ? currentPage : currentPage + 1, 'LOGIC ON REACT')
        push('/?page=' + (!latestData || !latestData.hasMore ? currentPage : currentPage + 1))
    }

    if (isFetching) {
        return <h4>Loading...</h4>
    }
    return (
        <>
            <Row className='py-3 row-cols-2 row-cols-md-4 row-cols-lg-6'>
                {resolvedData.data && resolvedData.data.movies.map(m => (
                    <Col key={m.id} className='my-4 d-flex flex-column' onClick={() => push('/movies/' + m.id, { state: 'ANGEL' })} style={{ cursor: 'pointer' }}>
                        <img src={m.medium_cover_image} className='rounded shadow' width={'100%'} />
                        <h6 className='mt-3 mb-0 font-weight-bold'>{m.title}</h6>
                        <small>{m.genres && m.genres.join(', ')}</small>
                        <span>{m.year}</span>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <MoviesPagination
                        currentPage={page}
                        total={resolvedData.data.movie_count}
                        handler={paginationHandler}
                        limit={resolvedData.data.limit}
                    />
                </Col>
            </Row>
        </>
    )
}

export default MovieList
