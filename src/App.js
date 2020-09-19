import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/layout';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App'>App</div>
    </Router>
  );
}

export default App;
