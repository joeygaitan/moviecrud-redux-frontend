import axios from 'axios'
export const GET_MOVIES = 'GET_MOVIES'

export const getMovies = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3004/movies`)
        .then(res=>{
            dispatch({
                type: GET_MOVIES,
                payload: res.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export const removeMovie = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3004/movies/${id}`)
        .then(res=>{
            dispatch(getMovies())
        })
        .catch((error)=>{console.log(error)})
    }
}

export const getMovie = (id) =>{
    return (dispatch) => {
        axios.get(`http://localhost:3004/movies/${id}`)
        .then(res=>{
            dispatch({
                type: 'GET_MOVIE',
                payload: res.data
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

export const updateMovie = (body, id, fn) => {
    return (dispatch) => {
        axios.put(`http://localhost:3004/movies/${id}`, body)
        .then(res=>{
            dispatch(getMovies())
            fn()
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

export const addMovie = (body)=>{
    return (dispatch) => {
        axios.post(`http://localhost:3004/movies/`, body)
        .then(res=>{
            dispatch(getMovies())
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}