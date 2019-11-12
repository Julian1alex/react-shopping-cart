
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './lib/serviceWorker';
import "./styles/base.css"
import App from "./components/App"

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
