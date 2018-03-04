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
		link: "/arena-rpg/",
		title: "Main Menu",
		image: main_menu
	},

	{
		link: "/arena-rpg/panel",
		title: "Hero Panel",
		image: hero_panel
	},

	{
		link: "/arena-rpg/magic_shop",
		title: "Magic shop",
		image: magic_shop
	},

	{
		link: "/arena-rpg/blacksmith",
		title: "Blacksmith",
		image: blacksmith
	},

	{
		link: "/arena-rpg/inn",
		title: "Inn",
		image: inn
	},

	{
		link: "/arena-rpg/arena",
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