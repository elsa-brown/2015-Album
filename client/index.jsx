import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Home from './Home';
import Player from './Player';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Home} />
		<Route path="/ggg" component={Player} />
	</Router>,
	document.getElementById('app')
);
