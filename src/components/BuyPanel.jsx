import React from 'react';
import { connect } from 'react-redux';
import { buyItem, innBuy } from '../actions';
import PanelElement from './PanelElement';

class BuyPanel extends React.Component {
	
	handleClick = (el) => {		
		this.props.gamelocation === 'inn'
		?
		this.props.innBuy(el)
		:
		this.props.buyItem(el)
	}

	render() {
		const { items, gamelocation, gold } = this.props;
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
});

export default connect(mapStateToProps, {
	buyItem, innBuy
})(BuyPanel);