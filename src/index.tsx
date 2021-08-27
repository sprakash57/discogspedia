import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from 'routes/Home';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
