import React from 'react';

const OneDay = React.createClass({
	render() {
		return(
			<div className="halfpage-1">
				<div className="one-day">
						<div className="temp oneday">
							<div className="avg">
								<h6 className="avgtag">Current Temperature:</h6>
								<strong>{this.props.almanac[0][0].temp}&#176;</strong>
							</div>
							<div className="high">
								<h6 className="hightag">High:</h6>
								{this.props.forecast[0][0].high}&#176;
							</div>
							<div className="low">
								<h6 className="lowtag">Low:</h6>
								{this.props.forecast[0][0].low}&#176;
							</div>
						</div>
				
				<div className="one-day">
						<div className="conditions oneday">
							<h5 className="conditionstag"><strong>{this.props.forecast[0][0].conditions}</strong></h5>
							<div>
								<img className="onedaycondition" src={this.props.forecast[0][0].icon_url} />
							</div>
							<div className="weatherdescription">
								{this.props.forecast[0][0].description}
							</div>
						</div>
					
				</div>
				</div>
			</div>
		)
	}
});

export default OneDay;