import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Stream from './components/Stream';
import * as serviceWorker from './serviceWorker';


const tracks = [
    {
        title: 'Some track'
    },
    {
        title: 'Some other track'
    }
];

ReactDOM.render(
    <Stream tracks={tracks} />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
