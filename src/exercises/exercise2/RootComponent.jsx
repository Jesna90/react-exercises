import React, { useRef, useState } from 'react';

import './RootComponent.css';
import ButtonToggle from '../../custom/ButtonToggle'

const RootComponent = () => {

    const [userInput, setUserInput] = useState({
		showButton: '',
		userEntry: '',
		changeCalculated: ''
	});
	
	const inputField = useRef();

    const inputChangeHandler = () => {
		setUserInput((previousState) => {
			return { ...previousState, userEntry: inputField.current.value };
		  });
		  
	}
	const calculateChangeHandler = () => {
		setUserInput(previousState => {
			return ({...previousState,  changeCalculated: userInput.userEntry})
		})
	}

	// do as you wish to copy the examples wanted
	// if you do things well, from exercice 1 to 5, you should reuse the result of the previous exercise in the next one
	// Ie. when you switch to exercise 2, copy exerice 1 and add functionalities
	// when you switch to exercise 3, copy exerice 2 and add functionalities
	// etc. until exercise 5

	return(
		<div>
			<ButtonToggle />

			<input type="number" ref={inputField} onChange={inputChangeHandler} placeholder="integer value"/>
			{ 
				userInput.userEntry > 0 && 
				<button onClick={calculateChangeHandler}> Calculate Change for {userInput.userEntry} </button>
			}
			{
			 userInput.changeCalculated > 0 && <p style={{textAlign:'right'}}>{userInput.changeCalculated}</p>
			} 
		</div>
	);

};

export default RootComponent;