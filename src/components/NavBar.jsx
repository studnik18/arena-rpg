import React from 'react';
import NavBarEl from './NavBarEl.jsx';
import main_menu from '../img/navbar/main_menu.png';
import hero_panel from '../img/navbar/hero_panel.png';
import magic_shop from '../img/navbar/magic_shop.png';
import blacksmith from '../img/navbar/blacksmith.png';
import inn from '../img/navbar/inn.png';
import arena from '../img/navbar/arena.png';



const elData = [
	
	{
		link: "/",
		title: "Main Menu",
		image: main_menu
	},

	{
		link: "/panel",
		title: "Hero Panel",
		image: hero_panel
	},

	{
		link: "/magic_shop",
		title: "Magic shop",
		image: magic_shop
	},

	{
		link: "/blacksmith",
		title: "Blacksmith",
		image: blacksmith
	},

	{
		link: "/inn",
		title: "Inn",
		image: inn
	},

	{
		link: "/arena",
		title: "Arena",
		image: arena
	}

];

const NavBar = () => (
	<ul className="navbar">
		
		{
			elData.map((el, i) =>
				<NavBarEl
					link={el.link}
					title={el.title}
					image={el.image}
					key={i}
				/>
			)
		}	

	</ul>

);

export default NavBar;