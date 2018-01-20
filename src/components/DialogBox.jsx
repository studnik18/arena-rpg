import React from 'react';
import { connect } from 'react-redux';

import ItemDescription from './ItemDescription';

class DialogBox extends React.Component {

	render() {

		const { location, hoveredItem } = this.props;

		return (
		
		<div className="dialog-box">
			<p>hi</p>
			<ItemDescription hoveredItem={hoveredItem}/>
		</div>

		)
	}
}

const mapStateToProps = (state) => ({
	hoveredItem: state.showDescription.hoveredItem
})

export default connect(mapStateToProps, 
null
)(DialogBox);