import React from 'react';

const Console = ({ logs }) => (
	
	<div>

		{
			logs.map((log, i) => 
				<p 
					key={i} 
					className={log[0] === 'player' ? 'player-log' : 'opponent-log'}
				>
					{log[1]}
				</p>
			)
		}

	</div>

)

export default Console;