import { combineReducers } from "redux";
import { GET_MOVIES } from '../actions/index'
const initialState = {
    all: [],
    selected: {}
}

const movies = (state = initialState, action) => {

    switch (action.type) {
        case GET_MOVIES:
        return { ...state, all: action.payload }
        case "GET_MOVIE" :
        return {...state, selected: action.payload}
        // case "UPDATE_MOVIE":
        // return {...state, selected: action.payload}
      default:
        return state
    }
}

export default combineReducers({
    movies,
})