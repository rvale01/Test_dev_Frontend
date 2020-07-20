import * as actions from './types'
const axios = require('axios').default;
let link = 'https://test-login-server.herokuapp.com'
export const getInfo = (data) => async (dispatch) => {

    let error

    const response = await axios({
        method: `get`,
        url: `https://restcountries.eu/rest/v2/name/${data}`,
        // baseURL: restAPI,
    }).catch((er) =>
        error = er
    )

    if (error) {
        dispatch({
            type: actions.GET_INFO,
            payload: "Error"
        })
    } else {
        dispatch({
            type: actions.GET_INFO,
            payload: response
        })
    }
}


export const getAllCountries = (data) => async (dispatch) => {
    let error

    const response = await axios({
        method: `get`,
        url: `https://restcountries.eu/rest/v2/all`,
    }).catch((er) =>
        error = er
    )

    if (error) {
        dispatch({
            type: actions.GET_COUNTRIES,
            payload: "Error"
        })
    } else {
        dispatch({
            type: actions.GET_COUNTRIES,
            payload: response
        })
    }
}


export const getNameCountry = (data) => (dispatch) => {
    dispatch({
        type: actions.GET_NAME_COUNTRY,
        payload: data
    })
}

export const saveUser = (value) => async (dispatch) => {
    let name = value.name
    let password = value.password
    let email = value.email
    var data = JSON.stringify({ "name": name, "password": password, "email": email });

    var config = {
        method: 'post',
        url: `${link}/question5/login`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            dispatch({
                type: actions.SAVE_USER,
                payload: response.data.result
            })
        })
        .catch(function (error) {
            console.log(error);
            dispatch({
                type: actions.SAVE_USER,
                payload: error
            })
        });

}

export const loginUser = (value) => async (dispatch) => {
    let password = value.password
    let email = value.email
    console.log(email)  
    var data = JSON.stringify({ "password": password, "email": email });

    var config = {
        method: 'post',
        url: `${link}/question6/login`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            dispatch({
                type: actions.LOGIN_USER,
                payload: response.data.result
            })
        })
        .catch(function (error) {
            console.log(error);
        });
   

}

const sendResult = (result) => (
    console.log(result),
    {
        type: actions.GET_RESULT,
        payload: result
    })

export const getResult = (data) => (dispatch) => {

    if (data[0]) {
        if (data[0].name === data[1].name && data[1].name === data[2].name) {
            if (data[0].name === 'cherry') {
                return dispatch(sendResult(50))
            } else if (data[0].name === 'apple') {
                return dispatch(sendResult(20))
            } else if (data[0].name === 'banana') {
                return dispatch(sendResult(15))
            } else if (data[0].name === 'lemon') {
                return dispatch(sendResult(3))
            }
        } else if (data[0].name === data[1].name) {
            // console.log(data, 'result back end')
            if (data[0].name === 'cherry') {
                return dispatch(sendResult(40))
            } else if (data[0].name === 'apple') {
                return dispatch(sendResult(10))
            } else if (data[0].name === 'banana') {
                return dispatch(sendResult(5))
            }
        } else if (data[1].name === data[2].name) {
            // console.log(data, 'result back end')
            if (data[1].name === 'cherry') {
                return dispatch(sendResult(40))
            } else if (data[1].name === 'apple') {
                return dispatch(sendResult(10))
            } else if (data[1].name === 'banana') {
                return dispatch(sendResult(5))
            }

        } else if (data[0] === data[2]) {
            if (data[0].name === 'cherry') {
                return dispatch(sendResult(40))
            } else if (data[0].name === 'apple') {
                return dispatch(sendResult(10))
            } else if (data[0].name === 'banana') {
                return dispatch(sendResult(5))
            }

        } else {
            dispatch(sendResult(0))
        }
    }
}