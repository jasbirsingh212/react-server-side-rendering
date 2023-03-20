import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

//hydrate : to attach events or  add functionality to server-side render content
ReactDOM.hydrate(<Home />, document.getElementById('root'));