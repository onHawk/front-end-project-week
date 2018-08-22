import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Landing from './components/Landing';
import Signup from './components/Signup';
import Signin from './components/Signin';
import NotesPage from './components/NotesPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/notes" component={NotesPage} />
        </div>
      </Router>
    );
  }
}
// component={FullNote}
export default App;
