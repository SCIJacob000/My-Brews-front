import React, {Component} from 'react';
import Login from '../Login';

class Header extends Component{
	render(){
		return(
			<div>
				<h1>Camping-Compass</h1>
				<Login />
			</div>
			)
	}
}

export default Header;