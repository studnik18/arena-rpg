import React from 'react';
import { connect } from 'react-redux';

import ItemDescription from './ItemDescription';

import { blacksmithDialogs, shopDialogs, innDialogs } from '../data/dialogs';

class DialogBox extends React.Component {

	generateInnMsg = (hoveredItem, HPState, goldState) => {		
		let message = ''; 
		if (typeof hoveredItem.id === 'undefined') {
			Object.keys(HPState).forEach(state => {
				if (HPState[state]) {
					message += innDialogs[state]
				}
			})
		} else if (hoveredItem.id >= 54 && hoveredItem.id <= 56) {
			message += innDialogs.lightDrinkHovered
		} else if (hoveredItem.id >= 57 && hoveredItem.id <= 60) {
			message += innDialogs.strongDrinkHovered
		} else if (hoveredItem.id === 61 || hoveredItem.id === 62) {
			message += innDialogs.sleepHovered
		};
		if (typeof hoveredItem.id !== 'undefined') {
			if (goldState.enoughGold) {
				message += ` ${innDialogs.enoughGold}`
			} else {
				message += ` ${innDialogs.goldShortage}`
			}
		}
		return message
	}

	generateShopMsg = (hoveredItem, HPState, goldState) => {		
		let message = ''; 
		if (typeof hoveredItem.id === 'undefined') {
			if (HPState.firmHP) {
				message += shopDialogs.firmHP
			} else {
				message += shopDialogs.lowHP
			}
		} else if (hoveredItem.action === 'buy') {
			if (hoveredItem.id >= 1 && hoveredItem.id <= 12) {
				message += shopDialogs.potionsHovered
			} else if (hoveredItem.id >= 13 && hoveredItem.id <= 24 && hoveredItem.id !== 18) {
				message += shopDialogs.jewelleryHovered
			} else if (hoveredItem.id === 18) {
				message += shopDialogs.powerfulNecklaceHovered
			}				
		} else if (hoveredItem.action === 'sell') {
			if (hoveredItem.id >= 1 && hoveredItem.id <= 24) {
				message += shopDialogs.sellShopItem
			} else if (hoveredItem.id >= 25) {
				message += shopDialogs.sellBlacksmithHovered
			} 
		}
		if (typeof hoveredItem.id !== 'undefined' && hoveredItem.action === 'buy') {
			Object.keys(goldState).forEach(state => {
				if (goldState[state]) {
					message += ` ${shopDialogs[state]}`
				}
			})
		}
		return message	
	}

	generateBlacksmithMsg = (hoveredItem, HPState, goldState) => {
		let message = '';
		if (typeof hoveredItem.id === 'undefined') {
			if (HPState.firmHP) {
				message += blacksmithDialogs.firmHP
			} else {
				message += blacksmithDialogs.lowHP
			}
		} else if (hoveredItem.action === 'buy') {
			if (hoveredItem.id === 25 || hoveredItem.id === 26) {
				message += blacksmithDialogs.daggerHovered
			} else if (hoveredItem.id >= 27 && hoveredItem.id <= 31) {
				message += blacksmithDialogs.swordHovered
			} else if (hoveredItem.id === 32 || hoveredItem.id === 36) {
				message += blacksmithDialogs.legendaryWeaponHovered
			} else if (hoveredItem.id >= 33 && hoveredItem.id <= 35) {
				message += blacksmithDialogs.axeHovered
			} else if ([37, 41, 45, 48].includes(hoveredItem.id)) {
				message += blacksmithDialogs.leatherHovered
			} else if (hoveredItem.id >= 51 && hoveredItem.id <= 53) {
				message += blacksmithDialogs.shieldHovered
			} else if ([38, 42, 43, 46, 49].includes(hoveredItem.id)) {
				message += blacksmithDialogs.mediumArmorHovered
			} else if ([39, 44, 47, 50].includes(hoveredItem.id)) {
				message += blacksmithDialogs.metalArmorHovered
			} else if (hoveredItem.id === 40) {
				message += blacksmithDialogs.breastplateHovered
			}							
		} else if (hoveredItem.action === 'sell') {
			if (hoveredItem.id >= 1 && hoveredItem.id <= 12) {
				message += blacksmithDialogs.sellPotionHovered
			} else if (hoveredItem.id >= 1 && hoveredItem.id <= 12) {
				message += blacksmithDialogs.sellJewelleryHovered
			} else if (hoveredItem.id >= 25) {
				message += blacksmithDialogs.sellBlacksmithHovered
			} 
		}
		if (typeof hoveredItem.id !== 'undefined' && hoveredItem.action === 'buy') {
			Object.keys(goldState).forEach(state => {
				if (goldState[state]) {
					message += ` ${blacksmithDialogs[state]}`
				}
			})
		}
		return message
	}

	generateMsg = (...args) => {
		switch(this.props.gamelocation) {
			case 'inn': 
				return this.generateInnMsg(...args)
			case 'shop':
				return this.generateShopMsg(...args)
			case 'blacksmith':
				return this.generateBlacksmithMsg(...args)
			default:
				return ''
		}
	}

	render() {
		const { hoveredItem, gold, maxHP, currentHP } = this.props;
		const goldState = {
			enoughGold: gold >= hoveredItem.buyValue,
			goldShortage: gold < hoveredItem.buyValue && gold > hoveredItem.buyValue / 10,
			seriousShortage: gold <= hoveredItem.buyValue / 10
		}
		const HPState = {
			firmHP: currentHP / maxHP >= 0.8,
			mediumHP: currentHP / maxHP > 0.4 && currentHP / maxHP < 0.8,
			lowHP:  currentHP / maxHP <= 0.4 
		}
		const args = [ hoveredItem, HPState, goldState ];

		return (	
			<div className="dialog-box">
				<p className="dialog-message">{this.generateMsg(...args)}</p>
				<ItemDescription hoveredItem={hoveredItem}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	hoveredItem: state.showDescription.hoveredItem,
	gold: state.handleGold.gold,
	maxHP: state.handleHP.maxHP,
	currentHP: state.handleHP.currentHP
})

export default connect(mapStateToProps, 
null
)(DialogBox);