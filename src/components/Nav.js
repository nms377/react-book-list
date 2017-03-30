import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return(
		<ul>
			<li><Link to="/favebook">Fave Book</Link></li>
			<li><Link to="/about">About</Link></li>
		</ul>
	)
}

export default Nav;