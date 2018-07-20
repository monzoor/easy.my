import { GET_AD } from './types';
import { NO_AD_FOUND } from './types';


const initialState = {
    payload: [],
}

export default function (state = initialState, action) {
    // console.log('====2===',action);
    switch (action.type) {
        case GET_AD:
            return {
                ...state,
                payload: action.payload
            }
        case NO_AD_FOUND: {
            return {
                ...state,
                payload: action.errorInfo
            }
        }
        default:
            return state
    }
}