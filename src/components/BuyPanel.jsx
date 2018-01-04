import React from 'react';
import { connect } from 'react-redux';
import { buyItem } from '../actions';
import { BuyPanelEl } from './BuyPanelEl';

class BuyPanel extends React.Component {
	handleClick = (el) => {
		this.props.buyItem(el)
	}

	render() {
		const { items, gamelocation, buyItem, children, gold } = this.props;
		return (

			<div className="panel" gamelocation={gamelocation}>
		
				{ items.map((el, i) => 

					<BuyPanelEl
						key={i}
						handleClick={this.handleClick}
						gold={gold}
						item={el}
					/>

/*					<div key={i} className='item-container'>
						<p onClick={ gold >= el.buyValue ? () => this.handleClick(el) : () => ''}>
							{el.name}
						</p>

					</div>*/
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