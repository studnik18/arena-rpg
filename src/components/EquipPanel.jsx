import React from 'react';
import { connect } from 'react-redux';

import { unequipItem, calculateAttributeBonus, addEffect, restoreHP } from '../actions';


class EquipPanel extends React.Component {

	handleClick = (el) => {
		this.props.unequipItem(el);
		this.props.calculateAttributeBonus();
	}

	useItem = (el) => {

		if (typeof el.restore !== "undefined") {
			this.props.restoreHP(el)
		}

		if (typeof el.effect !== "undefined" && this.props.temporaryEffects.includes(el.effect) === false) {
			this.props.addEffect(el)
		}

		this.props.calculateAttributeBonus();	
	}

	render() {

		const { equipped, temporaryEffects, unequipItem, addEffect, calculateAttributeBonus, restoreHP } = this.props;
		const categoriesArray = ['weapons', 'helmets', 'necklaces', 'armors', 'boots', 'gloves', 'rings', 'shields'];
		const potions = equipped.filter(item =>
			item.category === 'potions' || item.category === 'oils'
		)
		const battleGear = equipped.filter(item =>
			item.category !== 'potions' && item.category !== 'oils'
		)

		return (
			

			<div className="equip-panel">
				<div className="potion-bag">
					<div className="bag-img">

					</div>
					<div className="scroll-container">
					{
						potions.map((el, i) =>

							<div key={i} className="flex-row potion-container">
								<div 
									className={`potion id_${el.id}`} 
									onClick={() => this.handleClick(el)} 
								/>							
									<div>
										<button 
											className={`use-btn ${(el.useLocation === "both" || el.useLocation === "exploration") && temporaryEffects.includes(el.effect) === false ? "enabled" : "disabled"}`}

											onClick={ el.useLocation === "both" || el.useLocation === "exploration" ? () => this.useItem(el) : () => ''}
										>
											Use<br/>({el.quantity})
										</button>

									</div>
							</div>
						)
					}
					</div>
				</div>

				{
					categoriesArray.map((el, i) =>
						<div key={i} className={`empty-slot equipped-item ${el}`} />
					)
				}

				{
					battleGear.map((el, i) =>

						<div 
							key={i}
							className={`used-slot equipped-item ${el.category} id_${el.id}`}
							onClick={() => this.handleClick(el)} 
						/>

					)
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	equipped: state.handleEquip.equipped,
	temporaryEffects: state.handleTemporaryEffects.temporaryEffects

})

export default connect(mapStateToProps, {
	unequipItem, addEffect, calculateAttributeBonus, restoreHP
})(EquipPanel)
