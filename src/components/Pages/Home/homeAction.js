import { GET_ADS, NO_ADS_FOUND } from './types';

/**
 * get ad lists
 * @return {[object]}      ads lists
 */
export function getAds () {
    return (dispatch) => {
        dispatch ({
            type: 'CLEAR_MESSAGES'
        });
        return fetch(process.env.REACT_APP_API_HOST+'/ads')
        .then ((response) => {
            if (!response.ok) {

                return response.json().then(() => {
                    errorDispatch (dispatch, response)
                });
            }
            return response.json().then((ads) => {
                if (ads.length === 0) {
                    errorDispatch (dispatch, response)
                }
                dispatch({
                    type: GET_ADS,
                    payload: ads
                })
            });
        })
    }
}

function errorDispatch (dispatch, response){
    dispatch({
        type: NO_ADS_FOUND,
        errorInfo: {
            status: response.status,
            messages: response.statusText,
            hasErros: true
        }
    });
}
