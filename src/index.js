import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'font-awesome/css/font-awesome.min.css';

import Yell from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Yell />, document.getElementById('root'));
registerServiceWorker();
