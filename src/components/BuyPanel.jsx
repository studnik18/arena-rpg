import React from 'react';
import { connect } from 'react-redux';
import { buyItem } from '../actions';
import { PanelElement } from './PanelElement';

class BuyPanel extends React.Component {
	handleClick = (el) => {
/*		gamelocation === 'inn' 
		?
		this.props.restoreHP(hp)
		:*/
		this.props.buyItem(el)
	}

	render() {
		const { items, gamelocation, buyItem, gold } = this.props;
		return (

			<div className="panel buy-panel" gamelocation={gamelocation}>
		
				{ items.map((el, i) => 

					<PanelElement
						key={i}
						handleClick={this.handleClick}
						gold={gold}
						item={el}
						action="buy"
					/>
				)}

			</div>
		)
	}
};

const mapStateToProps = (state) => ({
	gold: state.handleGold.gold
})
	

export default connect(mapStateToProps, {
	buyItem
})(BuyPanel);