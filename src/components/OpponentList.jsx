import React from 'react';

import Opponent from './Opponent';

const OpponentList = ({ list, handleClick }) => (

	<div className="opponents-container">
		{
			list.map((opponent, i) =>
				<Opponent key={i} handleClick={handleClick} opponent={opponent} />
			)
		}
	</div>


);

export default OpponentList;