import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    
    let preloadedState = {};
    const store = configureStore(preloadedState);

    window.getState = store.getState
    window.dispatch = store.dispatch

    ReactDOM.render(<App store={store}/>, root);
});