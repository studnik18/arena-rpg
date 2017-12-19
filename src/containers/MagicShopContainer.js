import React from 'react';
import { connect } from 'react-redux';
import { buyItem, sellItem } from '../actions';
/*import { handleTransaction } from '../reducers/handleTransaction.js';*/
import MagicShop from '../components/MagicShop.jsx';

/*const MagicShopContainer = ({ buyItem, sellItem, inventory }) => (
  <MagicShop
    inventory={ inventory }
    buyItem={() => buyItem(item)}
    sellItem={() => sellItem(item)} 
  />
)*/

const mapStateToProps = (state) => ({
  inventory: /*handleTransaction(state)*/ 'potion'
})

const mapDispatchToProps = (dispatch) => ({
  buyItem: (item) => {
    dispatch(buyItem( item ))
  }

})

const MagicShopContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MagicShop)

export default MagicShopContainer;
