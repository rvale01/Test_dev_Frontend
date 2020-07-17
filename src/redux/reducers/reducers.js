import {
    GET_NAME_COUNTRY,
    GET_INFO,
    GET_COUNTRIES,
    GET_RESULT,
    SAVE_USER
} from '../actions/types';

const initialState = {
    name: '',
    info: '',
    country: '',
    result: 0,
    user:''
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_NAME_COUNTRY:
            return {
                ...state,
                name: action.payload
            }

        case GET_INFO:
            return {
                ...state,
                info: action.payload
            }
        case GET_COUNTRIES:
            return {
                ...state,
                country: action.payload
            }
        case GET_RESULT:
            return {
                ...state,
                result: action.payload
            }

        case SAVE_USER:
            return {
                ...state,
                user: action.payload
            }


        default:
            return state
    }
}

export default reducers