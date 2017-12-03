import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './style.scss';
import songs from './utils/songs';

export default class Home extends Component {
	constructor() {
		super()
		this.state = {
			ggg: true,
			MySongII: true,
			bigsky: true,
			station: true,
			clubmix: true
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(evt) {
		console.log('evt.target: ', evt.target.innerHTML)
		let nextState = function() {
			let result = {};
			let song = evt.target.innerHTML === 'My Song II' ? 'MySongII' : evt.target.innerHTML;
			result[song] = false;
			return result
		}.bind(evt)()
		this.setState(nextState)
		console.log('State: ', this.state)
	}

	render() {
		return (
		<ol>
			{songs.map((song, i) =>
				<Link key={i} to={song.url}>
					<li onClick={this.handleClick}><span className="title">{song.name}</span></li>
				</Link>
			)}
		</ol>
		)
	}
}

