import React from 'react';
import { connect } from 'react-redux';
import ACTION_TYPE from '../../redux/action-types';

const RootComponent = (props) => {

	// The dummyReducer is defined in the folder redux/reducers, it has only one ACTION_TYPE.. 
	// ACTION_TYPE.DUMMY_REDUCER.UPDATE_DUMMY_VALUE

	return(
		<div>
			<h3>Update dummyValue in dummyReducer</h3>
			<div>DummyValue: {props.dummyValue}</div>
			<button
				onClick={() => {
					// change dummyValue in dummyReducer to yes
					props.updateDummyValue('yes')
				}}
			>
				Set dummyValue to 'yes'
			</button>
			<button
				onClick={() => {
					// change dummyValue in dummyReducer to no
					props.updateDummyValue('no')
				}}
			>
				Set dummyValue to 'no'
			</button>
		</div>
	);

};

const mapStateToProps = state => ({
	// access dummyValue in dummyReducer
	dummyValue: state.dummyReducer.dummyValue
});

const mapDispatchToProps = (dispatch) => ({
	// or any otherway you want...
	//updateDummyValue: ...
	updateDummyValue: (label) => dispatch({ type: ACTION_TYPE.DUMMY_REDUCER.UPDATE_DUMMY_VALUE, payload: label})
});

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);