import React from 'react';
import { connect } from 'react-redux';

import HeroPortrait from './HeroPortrait';
import AttackButtons from './AttackButtons';
import PotionBar from './PotionBar';

import { restoreHP, dealDamage } from '../actions';


const HeroBattleScreen = () => (
	
	<div class="hero-battle-screen">
		<HeroPortrait />

		<AttackButtons />

		<PotionBar />
	</div>
		
)

export default HeroBattleScreen;

