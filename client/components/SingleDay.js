import React from 'react';

const SingleDay = React.createClass({
	render() {
		return(
			<div className="contain">
			<div className="day">
				<div className="dayofweek">
				{this.props.fivedayforecast[0][this.props.index].day}
				</div>
				<div className="conditions">{this.props.fivedayforecast[0][this.props.index].conditions}</div>
				<div className="picture"><img src={this.props.fivedayforecast[0][this.props.index].condition_url}/></div>
				<div className="high">{this.props.fivedayforecast[0][this.props.index].high}&#176;</div>
				<div className="low">{this.props.fivedayforecast[0][this.props.index].low}&#176;</div>

			</div>
			</div>
		)
	}
});

export default SingleDay;