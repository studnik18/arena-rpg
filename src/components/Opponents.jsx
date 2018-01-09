import React from 'react';

const Opponents = ({ list, handleClick }) => (

	<div>
		{
			list.map((opponent, i) =>
				<p key={i} onClick={()=> handleClick(opponent)}>{opponent.name}</p>
			)
		}
	</div>


);

export default Opponents;