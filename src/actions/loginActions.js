import { SET_CURRENT_USER, LOGIN_FAILURE} from './types';
// import axios from 'axios';
import React from 'react';


// console.log(process.env.REACT_APP_API_HOST);
export function login (loginInfo, props) {
    // console.log('======',loginInfo);
    return (dispatch) => {
        dispatch ({
            type: 'CLEAR_MESSAGES'
        });
        // return fetch(process.env.REACT_APP_API_HOST + '/react_login', {
        return fetch(process.env.REACT_APP_API_HOST + '/react_login', {
            // return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            // mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            // body: JSON.stringify(loginInfo)
            // headers: {
            //   // 'Accept': 'application/json',
            //   'Content-Type': 'application/x-www-form-urlencoded'
            // },
            body: JSON.stringify(loginInfo),

        })
        .then ((response) => {
            // console.log(response);
            if (!response.ok) {
                return response.json().then((errors) => {
                    console.log('action errors',errors);
                    dispatch({
                        type: 'LOGIN_FAILURE',
                        messages: errors
                    });
                });
            }
            // console.log('=====',response);

            return response.json().then((userInfo) => {
                userInfo = userInfo.apiResponse;
                console.log('=====',userInfo.data.token);

                const token = userInfo.data.token;

                localStorage.setItem('client', token);
                dispatch({
                    type: 'SET_CURRENT_USER',
                    user: userInfo
                });
            });
        })
    }
}

function status(res, dispatch) {
    // TODO: error handle
    // console.log('+++1===',res);
    if (!res.ok) {
        console.log(res);
        // throw new Error(res.statusText);
        // return res;
        // return res.json().then((json) => {
        //     console.log(json);
        //   // dispatch({
        //   //   type: 'LOGIN_FAILURE',
        //   //   // messages: Array.isArray(json) ? json : [json]
        //   // });
        // });
    }
    return res;
}
