function almanac(state = [], action) {

	switch(action.type) {
		case "RECEIVE_DATA_CONDITIONS":
			const conditions = action.json.current_observation;
			const oneDayConditions = {};
			oneDayConditions.city = conditions.display_location.full;
			oneDayConditions.feelslike = conditions.feelslike_f;
			oneDayConditions.temp = conditions.temp_f;
			return [[oneDayConditions], ...state];
	}
	return state;
}

export default almanac;