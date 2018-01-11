import React from 'react';

const Opponent = ({ handleClick, opponent }) => (

	<div className="opponent-slot">
		<div className="opponent-info">
			<p className="opponent-name">{opponent.name}</p>
			<p>{opponent.engTranslation}</p>

			<button onClick={()=> handleClick(opponent)}>Fight</button>
		</div>
		
		<div className={`${opponent.name} opponent-image`}></div>
	</div>

)

export default Opponent;