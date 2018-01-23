import React from 'react';

const VictoryScreen = ({ type, lastReward, level, handleModal, handleAttributePoints }) => (

	<div className="victory-screen">
		<div className="battle-summary">	
			<p>Congratualtions. You have defeated Your foe!</p>
			<p>For the successful fight You gain:</p>
			<div className="flex-row">
				<div className="flex-column">
					<div className="panel-xp"/>
					<p>{`${lastReward.XP} XP`}</p>
				</div>
				<div className="flex-column">
					<div className="gold-icon"/>
					<p>{`${lastReward.gold} gold`}</p>
				</div>
			</div>
			<p>{type === 'with-level-up' ? `New level reached! Current level: ${level}.` : ''}</p>
			<button 
				className="flex-row align-center" 
				onClick={() => {handleModal(); type === 'with-level-up' ? handleAttributePoints() : '' } }
			>
				<div className="laurel-icon"/>
				<p>Proceed</p>
			</button>
		</div>
	</div>

)

export default VictoryScreen;



