import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'

import Routes1 from './pages/Routes1';
import Routes2 from './pages/Routes2';
import UnknownPage from './pages/UnknownPage';
import './RootComponent.css'

const RootComponent = (props) => {

	console.log('<Exercise::RootComponent>');

	return(
		<div>
			{/* <h3>Create 2 routes (/route1, /route2) and Links to swicth between them and a default fallback route</h3> */}
				<ul className="list-unstyled">
					<li><Link to='/route1'>Go to route 1</Link></li>
					<li><Link to='/route2'>Go to route 2</Link></li>
					<li><Link to='/strange'>Go to wrong route</Link></li>
				</ul>
				
				<Routes>
					<Route exact path='/route1' element={<Routes1/>}></Route>
					<Route exact path='/route2' element={<Routes2/>}></Route>
					<Route exact path='/strange' element={<UnknownPage/>}></Route>
				</Routes>
		</div>
	);

};

export default RootComponent;