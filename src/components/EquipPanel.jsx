import React from 'react';
import { connect } from 'react-redux';

import { unequipItem, calculateAttributeBonus } from '../actions';


class EquipPanel extends React.Component {

	handleClick = (el) => {
		this.props.unequipItem(el);
		this.props.calculateAttributeBonus();
	}

	render() {

		const { equipped, unequipItem, calculateAttributeBonus } = this.props;
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
					{
						potions.map((el, i) =>

							<div key={i} className={`potion id_${el.id}`}>
								<p onClick={() => this.handleClick(el)}>{`${el.name}`}</p>

							</div>
						)
					}
				</div>

				{
					categoriesArray.map((el, i) =>
						<div key={i} className={`empty-slot equipped-item ${el}`} />
					)
				}

				{
					battleGear.map((el, i) =>

						<div key={i} className={`used-slot equipped-item ${el.category} id_${el.id}`}>
							<p onClick={() => this.handleClick(el)}>{`${el.name}`}</p>

						</div>
					)
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	equipped: state.handleEquip.equipped

})

export default connect(mapStateToProps, {
	unequipItem, calculateAttributeBonus
})(EquipPanel)
