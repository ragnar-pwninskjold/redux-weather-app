import React from 'react';
import SingleDay from './SingleDay';

const FiveDay = React.createClass({
	render() {
		return(
		<div className="halfpage2">
			<div className="five-day">
				<div className="contain2">
					<div className="day">
						<div className="dayofweek">
							{this.props.fivedayforecast[0][0].day}
						</div>
						<div className="conditions">{this.props.fivedayforecast[0][0].conditions}</div>
						<div className="picture"><img src={this.props.fivedayforecast[0][0].condition_url}/></div>
						<div className="high">{this.props.fivedayforecast[0][0].high}&#176;</div>
						<div className="low">{this.props.fivedayforecast[0][0].low}&#176;</div>

					</div>
				<div className="day">
					<div className="dayofweek">
					{this.props.fivedayforecast[0][1].day}
					</div>
					<div className="conditions">{this.props.fivedayforecast[0][1].conditions}</div>
					<div className="picture"><img src={this.props.fivedayforecast[0][1].condition_url}/></div>
					<div className="high">{this.props.fivedayforecast[0][1].high}&#176;</div>
					<div className="low">{this.props.fivedayforecast[0][1].low}&#176;</div>

				</div>
				</div>
				<div className="contain2">
					<div className="day">
						<div className="dayofweek">
							{this.props.fivedayforecast[0][2].day}
						</div>
						<div className="conditions">{this.props.fivedayforecast[0][2].conditions}</div>
						<div className="picture"><img src={this.props.fivedayforecast[0][2].condition_url}/></div>
						<div className="high">{this.props.fivedayforecast[0][2].high}&#176;</div>
						<div className="low">{this.props.fivedayforecast[0][2].low}&#176;</div>

					</div>
				<div className="day">
					<div className="dayofweek">
						{this.props.fivedayforecast[0][3].day}
					</div>
					<div className="conditions">{this.props.fivedayforecast[0][3].conditions}</div>
					<div className="picture"><img src={this.props.fivedayforecast[0][3].condition_url}/></div>
					<div className="high">{this.props.fivedayforecast[0][3].high}&#176;</div>
					<div className="low">{this.props.fivedayforecast[0][3].low}&#176;</div>

				</div>
				</div>

			</div>
		</div>
		)
	}
});

export default FiveDay;