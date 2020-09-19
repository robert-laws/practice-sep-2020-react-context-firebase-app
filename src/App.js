import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/layout';
import { Dashboard } from './components/dashboard';
import { ProjectDetails } from './components/projects';
import { SignIn, SignUp } from './components/auth';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
