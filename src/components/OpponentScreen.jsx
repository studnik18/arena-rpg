import React from 'react';



const OpponentScreen = ({ opponent }) => (

	<div className="opponent-battle-screen">
		
		<div className={`opponent-battle-image ${opponent.name}`} />
		
		<div>
			<p className="text-center"><span className="opponent-name">{opponent.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;Art: <a href={opponent.source.link}>{opponent.source.author}</a></p>
			<div className="panel-bar health-bar">
				<p>HP: {`${opponent.currentHP} / ${opponent.maxHP}`}</p>
				<div style={{width: `${Math.floor(100 - (opponent.currentHP / opponent.maxHP * 100))}%`}} className="damage" />
			</div>
			<div className="effect-box">
				<p>Current effects: {opponent.effects.length === 0 && 'none'}</p>
				{
					opponent.effects.map((effect, i) =>
						console.log(effect) ||
						<div key={i} className="flex-row">
							<div className={`battle-effect effect-${effect.name}`} />

							<p className="center">{`${effect.name}: ${effect.duration} turns`}</p>


						</div>
					)
				}
			</div>
		</div>	
	</div>

)

export default OpponentScreen;