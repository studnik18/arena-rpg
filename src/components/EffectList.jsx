import React from 'react';

import { connect } from 'react-redux';

class EffectList extends React.Component {

	render() {

		const { temporaryEffects } = this.props;

		const increasedStats = temporaryEffects.filter(effect =>
			typeof effect.statIncrease !== 'undefined'
		)

		const increasedDamage = temporaryEffects.filter(effect =>
			typeof effect.dmgIncrease !== 'undefined'
		)

		return (

			<div>
				<p>Current temporary effects:</p>
				<div className="effects-container">
					<div className="effects-column">
						{
							increasedStats.length > 0 &&
							
							increasedStats.map((attr, i) =>

								<p className="capitalize" key={i}>{attr.statIncrease} +10</p>
							)
						}
					</div>
					<div className="effects-column">
						{
							temporaryEffects.includes('poison') &&

							<p>Poisoned weapon</p>
						}
						{
							increasedDamage.length > 0 &&
							
							increasedDamage.map((dmg, i) =>

								<p key={i}>{dmg.dmgIncrease[0] === 'undead' ? 'Holy water' : 'Might of Perun'}</p>
							)
						}
					</div>
				</div>
			</div>			

		)
	}
}

const mapStateToProps = (state) => ({
	
	temporaryEffects: state.handleTemporaryEffects.temporaryEffects

})

export default connect( mapStateToProps, 
null
)(EffectList);