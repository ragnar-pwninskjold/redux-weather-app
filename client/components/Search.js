import React from 'react';
import Select from 'react-select';
import $ from "jquery";



var request = require('ajax-request');

const Search = React.createClass({

	getInitialState: function() {
		return {
			citySelectValue: 'blank',
			cities: []
		}
	},

	updateSuggestions: function(input, callback) {
		$.ajax({
			method: "GET",
			url: "https://autocomplete.wunderground.com/aq",
			data: {query: input},
			dataType: "jsonp",
			jsonp: "cb",
			crossDomain: true,
			success: function(data) {
				var data = data.RESULTS.map(function(city) {
					return { 
						value: city.zmw,
						label: city.name
					}
				});
				this.setState({cities: data});
				callback(null, {options: this.state.cities});
			}.bind(this)
		});
		// return {value: 1, label: "test"}
	},

	goToWeather: function(citycode) {
		const city = citycode;
		console.log("going to get weather for: " + city);
		this.props.getData(citycode);
		this.props.getConditions(citycode);
		this.context.router.push('/weather/'+citycode);
	},

	updateSelection: function(val) {
		this.setState({citySelectValue: val})
		this.goToWeather(val.value);
	},


	render() {
		return(
			<Select.Async
				className="search-bar"
				value={this.state.citySelectValue}
				onChange={this.updateSelection}
				loadOptions={this.updateSuggestions}
				minimumInput={2}
			/>
		)
	}
});

Search.contextTypes = {
	router: React.PropTypes.object
}

export default Search;