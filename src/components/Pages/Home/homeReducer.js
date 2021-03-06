import { GET_ADS, NO_ADS_FOUND } from './types';

const initialState = {
    payload: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ADS:
            return {
                ...state,
                payload: action.payload
            }
        case NO_ADS_FOUND: {
            return {
                ...state,
                payload: action.errorInfo
            }
        }
        default:
            return state
    }
}
