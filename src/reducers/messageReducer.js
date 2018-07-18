import { LOGIN_FAILURE } from '../actions/types';

import isEmpty from 'lodash/isEmpty';
// const initialState = {
//     messages: {},
//     success: false,
// }

export default function (state = {}, action) {
    // console.log('====1===',action.messages);
    switch (action.type) {
        case LOGIN_FAILURE:
            return {
                ...action.messages
            }
        case 'CLEAR_MESSAGES':
          return {};
        default:
            return state
    }
}
