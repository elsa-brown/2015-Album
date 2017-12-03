import React, { Component } from 'react';

import playButton from '../public/assets/visual/play-button.svg';
import pauseButton from '../public/assets/visual/pause-button.svg';
import speakerFull from '../public/assets/visual/speaker-full-vol.svg';
import speakerMute from '../public/assets/visual/volume-mute.svg'
import ggg from '../public/assets/audio/ggg.mp3';

export default class Player extends Component {
	constructor() {
		super()

		this.state = {
			isPlaying: true,
			isMuted: false,
			timeInSeconds: 0
		}

		this.tick = this.tick.bind(this);
		this.togglePlay = this.togglePlay.bind(this);
		this.toggleMute = this.toggleMute.bind(this);
	}

	tick() {
		if (this.state.isPlaying) {
			let seconds = this.state.timeInSeconds + 1;
			this.setState({timeInSeconds: seconds});
		}
	}

	componentDidMount() {
		this.timer = setInterval(this.tick, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	togglePlay() {
		let audio = document.getElementById('audio');
		let time = audio.currentTime;
		let nextState = !this.state.isPlaying;
		if (!nextState) {
			this.setState({time})
			audio.pause()
		} else {
			audio.currentTime = this.state.time
			audio.play()
		}
		this.setState({isPlaying: nextState})
	}

	toggleMute() {
		let audio = document.getElementById('audio');
		let muted = !this.state.isMuted;
		muted ? audio.volume = 0 : audio.volume = 1;
		this.setState({isMuted: muted})
	}

	render() {
		let minutes = Math.floor(this.state.timeInSeconds / 60) || 0;
		let rawSeconds = this.state.timeInSeconds % 60;
		let seconds = rawSeconds < 10 ? `0${rawSeconds}` : rawSeconds;

		let muted = this.state.isMuted;

		return (
			<div className="container">
				<audio id="audio" autoPlay="true" src={ggg} />
				<div id="player-bg">
					<img
						src={this.state.isPlaying ? pauseButton : playButton}
						id="play-button"
						onClick={this.togglePlay}
					/>
					<div id="progress-bar-default" />
					<div id="timestamp">{`${minutes}:${seconds}`}</div>
					<img
						src={speakerFull}
						id="volume"
						className={muted ? 'hide' : 'show'}
						onClick={this.toggleMute}
					/>
					<img
						src={speakerMute}
						id="mute"
						className={muted ? 'show' : 'hide'}
						onClick={this.toggleMute}
					/>
				</div>
			</div>
		)
	}
}
