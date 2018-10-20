
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream/index';
import { Provider } from 'react-redux';

const tracks = [
    {
        title: 'Some track'
    },
    {
        title: 'Some other track'
    }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
    <Provider store={ store }>
        <Stream />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
