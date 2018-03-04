import { combineReducers } from 'redux';
import { handleInventory } from './handleInventory';
import { handleEquip } from './handleEquip';
import { handleGold } from './handleGold';
import { handlePlayerStats } from './handlePlayerStats';
import { handleExp } from './handleExp';
import { handleHP } from './handleHP';
import { handleOpponent } from './handleOpponent';
import { handleTemporaryEffects } from './handleTemporaryEffects';
import { logMessage } from './logMessage';
import { showDescription } from './showDescription';
import { startGame } from './startGame';

export const rootReducer = combineReducers({
	handleInventory,
	handleEquip,
	handleGold,
	handlePlayerStats,
	handleExp,
	handleHP,
	handleOpponent,
	handleTemporaryEffects,
	logMessage,
	showDescription,
	startGame
});

export default rootReducer;