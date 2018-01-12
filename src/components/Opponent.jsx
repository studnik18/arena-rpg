import React from 'react';

const Opponent = ({ handleClick, opponent }) => (

	<div className="opponent-slot">
		<div className="opponent-info">
			<div className="flex-row info-header">
				<div>
					<p className="opponent-name">{opponent.name}</p>
					<p>{opponent.engTranslation}</p>
				</div>
				<button className="fight-button flex-row" onClick={()=> handleClick(opponent)}><div />Fight</button>
				<p>
					Art: <a href={opponent.source.link}>{opponent.source.author}</a>
				</p>
			</div>
			<div className="flex-row">
				<div className="info-column">
					<div className="flex-row">
						<div className="attr-pic panel-hp"/>
						<div>
							<p>Health points:</p>
							<p>{opponent.maxHP}</p>
						</div>
					</div>
					<div className="flex-row">
						<div className="attr-pic panel-damage"/>
						<div>
							<p>Damage:</p>
							<p>{`${opponent.damage[0]} - ${opponent.damage[1]}`}</p>
						</div>
					</div>
					<div className="flex-row">
						<div className="attr-pic panel-hit-chance"/>
						<div>
							<p>Hit chance:</p>
							<p>{`${opponent.hitChance * 100} %`}</p>
						</div>
					</div>
					<div className="flex-row">
						<div className="attr-pic panel-block-chance"/>
						<div>
							<p>Dodge chance:</p>
							<p>{`${opponent.dodgeChance * 100} %`}</p>
						</div>
					</div>
				</div>

				<div className="info-column">
					{ opponent.type === 'undead' ?
						
						<div className="flex-row">
							<div className="attr-pic panel-undead"/>
							<div>
								<p>Undead:</p>
								<p>Susceptible to holy water</p>
							</div>
						</div>

						:

						<div className="flex-row">
							<div className="attr-pic panel-living"/>
							<div>
								<p>Living creature:</p>
								<p>Susceptible to poison</p>
							</div>
						</div>						
					}
					
					{ opponent.armor > 0 ?
						
						<div className="flex-row">
							<div className="attr-pic panel-armor"/>
							<div>
								<p>Armor:</p>
								<p>{opponent.armor}</p>
							</div>
						</div>

						:
							
						''				
					}

					{ opponent.lifeDrain > 0 ?

						<div className="flex-row">
							<div className="attr-pic panel-life-drain"/>
							<div>
								<p>Life drain:</p>
								<p>{`${opponent.lifeDrain * 100} %`}</p>
							</div>
						</div>

						:
							
						''	
					}

					<div className="flex-row">
						<div className="attr-pic panel-xp"/>
						<div>
							<p>XP gained:</p>
							<p>{opponent.reward.XP}</p>
						</div>
					</div>

					<div className="flex-row">
						<div className="attr-pic coin-bg"/>
						<div>
							<p>Gold reward:</p>
							<p>{opponent.reward.gold}</p>
						</div>
					</div>


				</div>
			</div>
		</div>
		
		<div className={`${opponent.name} opponent-image`}></div>
	</div>

)

export default Opponent;