import React from 'react'
import { useQuery } from 'react-query'
import { YTS } from '../../../../core'

const MovieComments = ({ movie_id }) => {
    const { data, isFetching } = useQuery(`movie_comments_${movie_id}`, async () => YTS.GET_MOVIE_COMMENTS({ params: { movie_id } }), { refetchOnWindowFocus: false })
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default MovieComments
