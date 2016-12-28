function forecast(state = [], action) {
	switch(action.type) {
		case "RECEIVE_DATA_FORECAST":
			console.log(action);
			const bothForecasts = action.json.forecast;
			const txt = bothForecasts.txt_forecast.forecastday[0].fcttext;
			const firstDay = bothForecasts.simpleforecast.forecastday[0];
			const oneDay = {};
			oneDay.conditions = firstDay.conditions;
			oneDay.high = firstDay.high.fahrenheit;
			oneDay.icon_url = firstDay.icon_url;
			oneDay.low = firstDay.low.fahrenheit;
			oneDay.wind_dir = firstDay.avewind.dir;
			oneDay.wind_mph = firstDay.avewind.mph;
			oneDay.description = txt;
			return [[oneDay], ...state];
	}
	return state;
}

export default forecast;