import React from 'react';

import { connect } from 'react-redux';



class HeroPortrait extends React.Component {

	render() {
		const { maxHP, currentHP, gold, gamelocation } = this.props;
		return (

			<div className={`hero-${gamelocation}`}>
				{
					gamelocation === "arena" && <p className="header">Choose your opponent</p>
				}
				{	gamelocation === "inn" &&

					<div className="flex-row gold-container">
						<p className="price">
							{gold}
						</p>
						<div className="coin-bg"></div>
					</div>
				}
				<p className="player-name">Player</p>
				<div className="hero-pic">

				</div>
				<div className="panel-bar health-bar">
					<p>HP: {`${currentHP} / ${maxHP}`}</p>
					<div style={{width: `${Math.floor(100 - (currentHP / maxHP * 100))}%`}} className="damage" />
				</div>
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	maxHP: state.handleHP.maxHP,
	currentHP: state.handleHP.currentHP,
	gold: state.handleGold.gold

})

export default connect( mapStateToProps, 
null
)(HeroPortrait);