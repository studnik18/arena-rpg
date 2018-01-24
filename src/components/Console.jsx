import React from 'react';

const Console = ({ logs }) => (
	
	<div className="console-container">
		<div className="flex-row align-center battle-log-header">
			<div className="log-icon"/>
			<p className="font-medium">Battle log</p>
		</div>
		<div className="console">
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

	</div>

)

export default Console;