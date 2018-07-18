import { SET_CURRENT_USER } from '../actions/types';

import isEmpty from 'lodash/isEmpty';
const initialState = {
    user: {},
    isAuthenticated: false,
}

export default function (state = initialState, action) {
    // console.log('====1===',action);
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            }
        default:
            return state
    }
}
