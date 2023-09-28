import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Transition from './transition/transition';
import Header from './component/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (
    <div className="App">
        <Router>
          <Header />
          <Transition />
        </Router>
    </div>
  );
}

export default App;
