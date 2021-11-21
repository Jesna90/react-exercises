import React, { useRef, useState } from 'react';
import './RootComponent.css';

import './RootComponent.css';

import ButtonToggle from '../../custom/ButtonToggle'



const RootComponent = () => {
	const [userInput, setUserInput] = useState({
		showButton: '',
		userEntry: '',
		changeCalculated: '',
		returnCoinCalculated: []		
	});

	const [returnChange, setReturnChange] = useState([])
	const inputField = useRef();
	const COINS = [5, 2, 1]
    
	const inputChangeHandler = () => {
		setUserInput((previousState) => {
			return { ...previousState, userEntry: inputField.current.value };
		  });	  
	}

	const calculateChangeHandler = () => {
		const updatedCoins = Array(3).fill(0) 	
		let updatedUserInput = userInput.userEntry
	    let remainder;		 
		for(let i=0; i<COINS.length; i++){
			if(updatedUserInput >= COINS[i]) {
				remainder = updatedUserInput % COINS[i];
				updatedCoins[i] = ~~(updatedUserInput / COINS[i])
				updatedUserInput = remainder
				if(remainder === 0)
				   break;				
			}
		}		
		setUserInput(previousState => {
			return ({...previousState,  changeCalculated: userInput.userEntry, returnCoinCalculated: updatedCoins})
			})		
	}
	
	const returnChangeHandler = () => {
		const arraySum =  userInput.returnCoinCalculated.reduce((ele,total) => ele+total)
		setReturnChange(previousState => [...previousState, arraySum])
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
				
				<div className="py-2" style={{textAlign:'right'}}>
					{
						userInput.changeCalculated && <div>Change for: {userInput.changeCalculated}</div>
					} 
					<ul  className="my-2 list-unstyled">
						{ 
						userInput.changeCalculated &&							
							userInput.returnCoinCalculated.map((item, index) => {
								return <li key={index}>{`${COINS[index]} x ${item}`}</li>
							})
						}
					</ul>
					{	userInput.changeCalculated &&
						<button onClick={returnChangeHandler}> Return change</button>
					}
				</div>
				{
					returnChange.map(change => <div className="fw-bold">returned {change} cut back</div>)
				}
				
				<div class="box">"Enter an amount, click 'calculate change', and then 'return change'" and do this multiple times to see what we want.</div>
		</div>
	);

};

export default RootComponent;