import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/layout';
import { Dashboard } from './components/dashboard';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
