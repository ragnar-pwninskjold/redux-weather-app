import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';


function mapStateToProps(state) {
	return {
		alerts: state.alerts,
		almanac: state.almanac,
		forecast: state.forecast,
		fivedayforecast: state.fivedayforecast
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}


const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;