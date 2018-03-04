import React from 'react';
import { connect } from 'react-redux';
import EffectList from './EffectList';

class HeroPortrait extends React.Component {
	render() {
		const { maxHP, currentHP, gold, gamelocation, name } = this.props;
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
				{
					gamelocation !== "battle" &&
					<p className="player-name">{name}</p>
				}
				<div className="hero-pic">
					<p>Art:&nbsp; 
						<a 
							href="https://heavyarmorhellfire.deviantart.com/art/Slavic-Warlord-688314872" 
							target="_blank" 
							rel="noopener noreferrer"
						>
							Heavyarmorhellfire
						</a>
					</p>
				</div>
				{
					gamelocation === "battle" &&

					<p className="player-name">{name}</p>					
				}
				<div className="panel-bar health-bar">
					<p>HP: {`${currentHP} / ${maxHP}`}</p>
					<div style={{width: `${Math.floor(100 - (currentHP / maxHP * 100))}%`}} className="damage" />
				</div>
				{
					gamelocation === "arena" && 
					<EffectList />
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	name: state.startGame.name,
	maxHP: state.handleHP.maxHP,
	currentHP: state.handleHP.currentHP,
	gold: state.handleGold.gold,
})

export default connect(mapStateToProps, 
null
)(HeroPortrait);