import { GET_AD } from './types';
import { NO_AD_FOUND } from './types';

export function getAd (uid, slug) {
    return (dispatch) => {
        dispatch ({
            type: 'CLEAR_MESSAGES'
        });
        return fetch(process.env.REACT_APP_API_HOST+'/ads?id=' + uid + '&slug=' + slug)
        .then ((response) => {
            if (!response.ok) {
                return response.json().then(() => {
                    errorDispatch (dispatch, response)
                });
            }
            return response.json().then((ad) => {
                if (ad.length === 0) {
                    errorDispatch (dispatch, response)
                }
                dispatch({
                    type: GET_AD,
                    payload: ad
                })
            });
        })
    }
}

function errorDispatch (dispatch, response){
    dispatch({
        type: NO_AD_FOUND,
        errorInfo: {
            status: response.status,
            messages: response.statusText,
            hasErros: true
        }
    });
}
