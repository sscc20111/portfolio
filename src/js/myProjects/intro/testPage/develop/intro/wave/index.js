import React from 'react';

import App from './app';
// import './App.css';
class WaveApp extends React.Component {
    componentDidMount() {
        new App(".waveBox");
    }

    render () {
        return (
            <div style={{width:'500px'}} className="waveBox"></div>
        )
    }
}

export default WaveApp;