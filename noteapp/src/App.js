import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Landing from './components/home/Landing';
import Signup from './components/home/Signup';
import Signin from './components/home/Signin';
import NotesPage from './components/notes/NotesPage';
import AddNote from './components/notes/AddNote';
import FullNote from './components/notes/FullNote';

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
          <Route path="/viewnote/:id" component={FullNote} />
          <AddNote />
        </div>
      </Router>
    );
  }
}
// component={FullNote}
export default App;
