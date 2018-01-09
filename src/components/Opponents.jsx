import React from 'react';

const Opponents = ({ list }) => (

	<div>
		{
			list.map((opponent, i) =>
				<p key={i}>{opponent.name}</p>
			)

		}
	</div>


);

export default Opponents;