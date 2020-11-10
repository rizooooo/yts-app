import React, { useState } from 'react'
import { FaArrowLeft, FaDotCircle, FaDownload, FaHeart, FaImdb, FaLanguage, FaMagnet, FaPlay, FaRegClock, FaYoutube } from 'react-icons/fa'
import { useQuery } from 'react-query'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { Badge, Button, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { YTS } from '../../core'
import { MovieComments, MovieSuggestions } from './components'

const MovieDetail = () => {
    const { id } = useParams();
    const location = useLocation();

    console.log(location);
    const { isFetching, data } = useQuery('movie_detail_' + id, async () => await YTS.GET_MOVIE_DETAIL({ params: { movie_id: id,  with_images: true, with_cast: true } }), { refetchOnWindowFocus: false })

    const [modalTrailer, setModalTrailer] = useState(false);
    const [modalDownload, setModalDownload] = useState(false);

    const toggleTrailerModal = () => setModalTrailer(!modalTrailer);

    const toggleModalDownload = () => setModalDownload(!modalDownload);

    if (isFetching) {
        return <h4>Loading</h4>
    }

    const { data: { movie } } = data;
    return (
        <>
            <Modal size={'lg'} isOpen={modalTrailer} toggle={toggleTrailerModal}>
                {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
                <ModalBody className='p-0'>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src={`https://www.youtube.com/embed/${movie.yt_trailer_code}?rel=0`} allowfullscreen></iframe>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" className='font-weight-bold' onClick={toggleTrailerModal}>Close</Button>
                </ModalFooter>
            </Modal>

            <Modal size={movie.torrents && movie.torrents.length > 2 ? 'xl' : undefined} isOpen={modalDownload} toggle={toggleModalDownload}>
                <ModalBody >
                    <Row>
                        {movie.torrents && movie.torrents.map(t => (
                            <Col className='d-flex flex-column'>
                                <h5>{t.quality} <span className='text-capitalize'>({t.type})</span></h5>
                                <h6>{t.size}</h6>
                                <Button onClick={() => window.open(t.url)} color={'success'}>
                                    <FaMagnet className='mr-2' />
                                    Download
                                </Button>
                            </Col>
                        ))}
                    </Row>

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" className='font-weight-bold' onClick={toggleModalDownload}>Close</Button>
                </ModalFooter>
            </Modal>
            <Container fluid style={{
                backgroundImage: `url(${movie.background_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',

            }}>
                <Row className='justify-content-center py-3'>
                    <Col md={2}>
                        <img width={'100%'} src={movie.large_cover_image} className='rounded' />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Container>
                            <h4 className='font-weight-bold text-center text-white'>{movie.title_long}</h4>
                            <Row className='justify-content-center'>
                                <Col md={6}>
                                    <div className='d-flex align-items-center justify-content-between my-3 text-white'>
                                        <span className='d-flex align-items-center h6'>
                                            <FaRegClock className='mr-2' size={20} />
                                            {movie.runtime}mins
                            </span>
                                        <span className='d-flex align-items-center text-uppercase h6'>
                                            <FaLanguage className='mr-2' size={20} />
                                            {movie.language}
                                        </span>
                                        <span className='d-flex align-items-center text-uppercase h6'>
                                            <FaImdb className='mr-2' size={20} />
                                            {movie.rating}/10
                            </span>
                                        <span className='d-flex align-items-center text-uppercase h6'>
                                            <FaHeart className='mr-2' size={20} />
                                            {movie.like_count}
                                        </span>
                                        <span className='d-flex align-items-center text-uppercase h6'>
                                            <FaDownload className='mr-2' size={20} />
                                            {movie.download_count}
                                        </span>
                                    </div>
                                </Col>
                            </Row>

                        </Container>

                    </Col>
                </Row>

                <Row className='py-2'>
                    <Col className='text-center'>
                        {movie.yt_trailer_code && <Button onClick={toggleTrailerModal} color={'danger'} className='font-weight-bold mr-2'>
                            <FaYoutube /> Watch Trailer
                        </Button>}
                        <Button onClick={toggleModalDownload} color={'primary'} className='font-weight-bold ml-2'>
                            <FaDownload /> Download
                        </Button>
                    </Col>
                </Row>

                {/* <Row className='justify-content-center'>
                    {movie.torrents && movie.torrents.map(t => (
                        <Col c>
                            <Button color={'danger'} className='font-weight-bold'>
                                <FaYoutube /> Watch Trailer
  </Button>
                        </Col>
                    ))}

                </Row> */}
            </Container>
            {/* <div className='fade-bottom'></div> */}
            <Container>
                <Row className='py-5'>
                    <Col>
                        <h5 className='font-weight-bold'>Synopsis</h5>
                        <p className='lead text-white'>
                            {movie.description_intro}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5 className='font-weight-bold'>Movie Suggestions</h5>
                    </Col>
                </Row>
                <MovieSuggestions movie_id={movie.id} />
                <Row>
                    <Col>
                        <h5 className='font-weight-bold'>Movie Comments</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <MovieComments movie_id={movie.id} />
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default MovieDetail