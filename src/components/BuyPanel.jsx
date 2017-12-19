import React from 'react';
import { connect } from 'react-redux';
import { buyItem } from '../actions';

class BuyPanel extends React.Component {
	handleClick = (el) => {
		this.props.buyItem(el)
	}

	render() {
		const { items, gamelocation, buyItem, children } = this.props;
		return (

			<div className="panel" gamelocation={gamelocation}>
		
				{ items.map((el, i) => 

					<div key={i} className='item-container'>
						<p onClick={() => this.handleClick(el)}>{el.name}</p>			
					</div>
				)}
				
			</div>




		)
	}
};

export default connect(null, {
	buyItem
})(BuyPanel);