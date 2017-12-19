import React from 'react';
import { connect } from 'react-redux';
import { buyItem } from '../actions';

class BuyPanel extends React.Component {
	handleClick = (el) => {
		this.props.buyItem(el)
	}

	render() {
		const { items, gamelocation, buyItem, children, gold } = this.props;
		return (

			<div className="panel" gamelocation={gamelocation}>
		
				{ items.map((el, i) => 

					<div key={i} className='item-container'>
						<p onClick={() => this.handleClick(el)}>{el.name}</p>

					</div>
				)}
				<p>{gold}</p>
				
			</div>




		)
	}
};

const mapStateToProps = (state) => ({
	gold: state.gold
})
	

export default connect(mapStateToProps, {
	buyItem
})(BuyPanel);