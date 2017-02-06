import React from 'react';

const CityName = React.createClass({
	render() {
		if (this.props.almanac[0] == undefined) {
			return (
				<div className="city">
				
				</div>
			)
		}
		else {
			return(
			<div className="city">
			{this.props.almanac[0][0].city}
			</div>
			)
		}
	}
});

export default CityName;