import { GET_AD, NO_AD_FOUND } from './types';

/**
 * fetch ad details
 * @param  {[number]} uid  ad uid from url
 * @param  {[string]} slug ad slug fro url
 * @return {[object]}      individual id info
 */
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

/**
 * Update wish list
 * @param  {[number]} uid      ad uid from url
 * @param  {[bool]} wishlist   get voolean value by click on the wishlist button
 * @return {[type]}            individual id info
 */
export function updateWishList (uid, wishlist) {
    return (dispatch) => {
        dispatch ({
            type: 'CLEAR_MESSAGES'
        });
        return fetch(process.env.REACT_APP_API_HOST+'/ads/' + uid, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            	"wishlist": wishlist
            })
        })
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
            });
        })
    }
}

/**
 * [errorDispatch description]
 * @param  {[method]} dispatch
 * @param  {[object]} response response from fetch
 */
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
