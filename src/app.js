import React from 'react';
import { render } from 'react-dom';
import routes from './routes/routes';

import './style/styles.scss';

render(
	<div>
		{routes}
	</div>,
	document.getElementById('app')
	
);
