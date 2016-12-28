import React from 'react';

const CityName = React.createClass({
	render() {
		return(
			<div className="city">
			{this.props.almanac[0][0].city}
			</div>
		)
	}
});

export default CityName;