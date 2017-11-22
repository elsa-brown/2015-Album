import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './style.scss';
import songs from './utils/songs';

export default class Home extends Component {
	constructor() {
		super()
		this.state = {
			ggg: true,
			mySongII: true,
			bigsky: true,
			station: true,
			clubmix: true
		}
	}

	render() {
		return (
		<ol>
			{songs.map((song, i) =>
				<Link key={i} to={song.url}>
					<li source={song.src}><span className="title">{song.name}</span></li>
				</Link>
			)}
		</ol>
		)
	}
}

