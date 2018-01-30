import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Yell from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Yell />, document.getElementById('root'));
registerServiceWorker();
