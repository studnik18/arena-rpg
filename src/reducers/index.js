import { combineReducers } from 'redux';
import { handleInventory } from './handleInventory.js';
import { handleEquip } from './handleEquip.js';
import { handleGold } from './handleGold.js';
import { handlePlayerStats } from './handlePlayerStats.js';
import { handleExp } from './handleExp.js';
import { handleHP } from './handleHP.js';
import { handleOpponent } from './handleOpponent.js';
import { handleTemporaryEffects } from './handleTemporaryEffects.js';

export const rootReducer = combineReducers({
	handleInventory,
	handleEquip,
	handleGold,
	handlePlayerStats,
	handleExp,
	handleHP,
	handleOpponent,
	handleTemporaryEffects
});

export default rootReducer;