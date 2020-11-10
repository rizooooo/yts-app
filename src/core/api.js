import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://yts.mx/api/v2/'
});

const API = {
    GET_MOVIES: async (config = null) => {
        const { data } = await instance.get('list_movies.json', config);
        return data;
    },
    GET_MOVIE_DETAIL: async (config = null) => {
        const { data } = await instance.get('movie_details.json', config);
        return data;
    },
    GET_MOVIE_SUGGESTIONS: async (config = null) => {
        const { data } = await instance.get('movie_suggestions.json', config);
        return data;
    },
    GET_MOVIE_COMMENTS: async (config = null) => {
        const { data } = await instance.get('movie_comments.json', config);
        return data;
    },
    GET_MOVIE_REVIEWS: async (config = null) => {
        const { data } = await instance.get('movie_reviews.json', config);
        return data;
    },
    GET_MOVIE_PARENTAL_GUIDANCE: async (config = null) => {
        const { data } = await instance.get('movie_parental_guides.json', config);
        return data;
    },
    GET_UPCOMING_MOVIES: async (config = null) => {
        const { data } = await instance.get('list_upcoming.json', config);
        return data;
    },
}

export default API;