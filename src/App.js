import React from 'react';
import { HashRouter } from 'react-router-dom';
import Transition from './transition/transition';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (
    <div className="App">
        <HashRouter >
          <Header />
          <Transition />
        </HashRouter>
    </div>
  );
}

export default App;
