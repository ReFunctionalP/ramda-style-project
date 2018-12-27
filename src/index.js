import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';


function startup (App) {
    render(<App/>, document.getElementById('app'));
}



startup(App);
