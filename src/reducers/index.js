import { combineReducers } from 'redux';
import { handleInventory } from './handleInventory.js';
import { handleEquip } from './handleEquip.js';
import { handleGold } from './handleGold.js';
import { handlePlayerStats } from './handlePlayerStats.js';
import { handleExp } from './handleExp.js';

export const rootReducer = combineReducers({
	handleInventory,
	handleEquip,
	handleGold,
	handlePlayerStats,
	handleExp
});

export default rootReducer;