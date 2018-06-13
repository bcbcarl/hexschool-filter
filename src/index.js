import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import registerFontAwesome from './internal/registerFontAwesome';

import './styles.css';

registerFontAwesome();
render(<App />, document.getElementById('root'));
