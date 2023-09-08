import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Transition from './transition/transition';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Transition />
        </Router>
    </div>
  );
}

export default App;
