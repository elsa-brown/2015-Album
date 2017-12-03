import React from 'react';

import playButton from '../public/assets/visual/play-button.svg';
import speakerFull from '../public/assets/visual/speaker-full-vol.svg';

const Player = () => {
	return (
		<div className="container">
			<div id="player-bg">
				<img src={playButton} id="play-button" />
				<div id="progress-bar" />
				<div id="timestamp">0:00</div>
				<img src={speakerFull} id="volume" />
			</div>
		</div>
	)
};

export default Player;
