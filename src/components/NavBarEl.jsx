import React from 'react';
import { Link } from 'react-router-dom';

const NavBarEl = ({link, image, title}) => (

	<li className="navbar-el">
		<Link to={link}>
			<div className="navbar-el-container">
				<img 
					className="navbar-el-img"
					src={image}
					alt={`${title} image`}
				/>				
			</div>
			<p className="navbar-el-title">{title}</p>
		</Link>
	</li>

);

export default NavBarEl;