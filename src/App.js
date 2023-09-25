import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Transition from './transition/transition';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Header = () => {
  const [test, testset] = useState('test');

  const testEvent = () => {
    testset('start')
  }

  return (
    <header>{test}</header>
  );
}

function App() {
  return (
    <div className="App">
        <Header />
        <Router>
          <Transition />
        </Router>
    </div>
  );
}

export default App;
