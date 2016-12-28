import React from 'react';
import OneDay from './OneDay.js';
import FiveDay from './FiveDay.js';
import CityName from './cityname.js';

const Weather = React.createClass({
	render() {
		return(
			<div className="weather-grid">
				<CityName {...this.props} />
				<OneDay {...this.props} />
				<FiveDay {...this.props} />
			</div>
		)
	}
});

export default Weather;