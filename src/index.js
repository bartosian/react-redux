import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
    <div>
        {
            tracks.map((track) => {
                return <div className="track">{track.title}</div>;
            })
        }
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
