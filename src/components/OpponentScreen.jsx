import React from 'react';

const OpponentScreen = ({ opponent }) => (

	<div>
		<p>Opponent screen</p>
		<p> {opponent.name}{opponent.currentHP}</p>
	</div>

)

export default OpponentScreen;