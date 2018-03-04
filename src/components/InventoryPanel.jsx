import React from 'react';
import { connect } from 'react-redux';
import { equipItem, unequipItem, calculateAttributeBonus, showDescription } from '../actions';


class InventoryPanel extends React.Component {
	
	handleClick = (el) => {
		if (el.category !== 'potions' && el.category !== 'oils') {
			const equippedOneAllowed = this.props.equipped.filter(
				item => item.category === el.category
			);
			if (equippedOneAllowed.length > 0) {
				this.props.unequipItem(equippedOneAllowed[0]);
			}		
		}
		this.props.equipItem(el);
		this.props.calculateAttributeBonus();
	}

	showItemDescription = (item) => {
		this.props.showDescription(item)
	}

	render() {
		const { inventory, gold } = this.props;
		return (
			<div className="panel inventory-panel">
				
				<div>
					<div className="flex-row gold-container">
						<p className="price">
							{gold}
						</p>
						<div className="coin-bg"></div>
					</div>
					{
						inventory.length > 0 
						? <p className="inventory-header">
							Your inventory
						</p> 
						: ''
					}
				</div>			
				{
					inventory.length > 0 ?
					inventory.map((el, i) =>
						<div 
							className='item-container'
							onMouseEnter={() => this.showItemDescription(el)}
							onMouseLeave={() => this.showItemDescription('')}
							key={el.id}							
						>
							<p className="item-title">{el.name} {el.quantity > 1 ? ` (${el.quantity})`: ''}</p>
							<div className="item-data">
								<div
									className={`item-icon id_${el.id}`} 
								/>								
								<button 
									className="equip-btn"
									onClick={ () => { this.handleClick(el); this.showItemDescription('') } }			
								>
									Equip
									<div className="equip-icon" />
								</button>

							</div>
						</div>
					)
					: <p className="inventory-header">Your inventory is empty</p>
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	inventory: state.handleInventory.inventory,
	equipped: state.handleEquip.equipped,
	gold: state.handleGold.gold
})

export default connect(mapStateToProps, {
	equipItem, unequipItem, calculateAttributeBonus, showDescription
})(InventoryPanel)


