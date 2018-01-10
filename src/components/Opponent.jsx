import React from 'react';

const Opponent = ({ handleClick, opponent }) => (

	<div className="opponent-slot">
		<div className={`${opponent.name} opponent-image`}></div>
		<p onClick={()=> handleClick(opponent)}>{opponent.name}</p>
	</div>

)

export default Opponent;