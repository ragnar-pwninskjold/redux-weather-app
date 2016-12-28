function fivedayforecast(state = [], action) {
	switch(action.type) {
		case "RECEIVE_DATA_FORECAST":
			console.log(action);
			const bothForecasts = action.json.forecast;
			const days = bothForecasts.simpleforecast.forecastday;
			const forecasts = [];
			console.log(days);
			for (var i = 1; i < 5; i++) {
				const day = {};
				day.day = days[i].date.weekday;
				day.high = days[i].high.fahrenheit;
				day.low = days[i].low.fahrenheit;
				day.conditions = days[i].conditions;
				day.condition_url = days[i].icon_url;
				forecasts.push(day);
			}

			
			return [forecasts, ...state];
	}
	return state;
}

export default fivedayforecast;