//get new data

import $ from "jquery";
import fetchJsonp from "fetch-jsonp";


function requestData(city) {
	return {
		type: 'REQUEST_DATA_FORECAST',
		city
	}
}

function receiveData(city, json) {
	return {
		type: 'RECEIVE_DATA_FORECAST',
		city,
		json
	}
}


function requestDataConditions(city) {
	return {
		type: 'REQUEST_DATA_CONDITIONS',
		city
	}
}

function receiveDataConditions(city, json) {
	return {
		type: 'RECEIVE_DATA_CONDITIONS',
		city,
		json
	}
}

// function requestMultiData(city) {
// 	return {
// 		type: 'REQUEST_DATA_MULTI',
// 		city
// 	}
// }

// function receiveMultiData(city, json) {
// 	return {
// 		type: 'RECEIVE_DATA_MULTI',
// 		city,
// 		json
// 	}
// }


export function getData(city) {

	return dispatch => {
		dispatch(requestData(city));
		fetchJsonp('https://api.wunderground.com/api/b177596eb43ca2fe/forecast10day/q/zmw:'+city+'.json')
		.then(response=> {return response.json()})
		.then(json=>dispatch(receiveData(city, json)))
	}

}

export function getConditions(city) {
	console.log("got request for getConditions");
	return dispatch => {
		dispatch(requestDataConditions(city));
		console.log("got request data conditions dispatch");
		fetchJsonp('https://api.wunderground.com/api/b177596eb43ca2fe/conditions/q/zmw:'+city+'.json')
		.then(response=>{return response.json()})
		.then(json=>dispatch(receiveDataConditions(city, json)))
		console.log("got to end of dispatch");
	}
}

export function getMultiDay(city) {

	return dispatch => {
		dispatch(requestMultiData(city));
		fetchJsonp('https://api.wunderground.com/api/b177596eb43ca2fe/forecast10day/q/zmw:'+city+'.json')
		.then(response=> {return response.json()})
		.then(json=>dispatch(receiveMultiData(city, json)))
	}

}