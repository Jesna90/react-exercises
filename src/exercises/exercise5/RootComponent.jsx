import React, { useRef, useState } from 'react';
import './RootComponent.css';
import ButtonToggle from '../../custom/ButtonToggle'

const COINS = [5, 2, 1]
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
		<div className="container"> 
		
			<ButtonToggle classes="toggleButton" parentClasses="d-flex justify-content-center" h2classes="text-center p-4" />

            <div className="d-flex py-2 justify-content-between">   
				<div className="g-4 d-flex flex-column align-items-stretch justify-content-stretch min-width">
					<div className="justify-self-stretch my-1">
						<input className="p-2 w-100 " type="number" ref={inputField} onChange={inputChangeHandler} placeholder="integer value"/>
					</div>
					{ 
						userInput.userEntry > 0 && 
						<div className="d-flex justify-self-stretch my-1">
							<button onClick={calculateChangeHandler} className="p-2 w-100 button"> Calculate Change for {userInput.userEntry} </button>
						</div>
					}
				</div>

				<div>
					<div className="d-flex flex-nowrap">
						{
							userInput.changeCalculated && <div>Change for: {userInput.changeCalculated}</div>
						} 
						{ userInput.changeCalculated &&														
								userInput.returnCoinCalculated.map((item, index) => {
									return <span className="fw-bold px-2" key={index}>{`${COINS[index]} x ${item}`}</span>
								})					
						}
					</div>
						{	userInput.changeCalculated &&
							<button onClick={returnChangeHandler} className="p-2 my-2 button"> Return change</button>
						}
				</div>
				
			</div>

			{/* return Cuts */}
			<div className="returned-cuts">
				{
					returnChange.map(change => <div className="fw-bold">returned <br/>{change} <br/>cut back</div>)
				}
			</div>
			
		</div>
	);

};

export default RootComponent;