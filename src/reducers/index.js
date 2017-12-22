import { combineReducers } from 'redux';
import { handleInventory } from './handleInventory.js';
import { handleEquip } from './handleEquip.js';
import { handleGold } from './handleGold.js';


export const rootReducer = combineReducers({
	handleInventory,
	handleEquip,
	handleGold
});

export default rootReducer;