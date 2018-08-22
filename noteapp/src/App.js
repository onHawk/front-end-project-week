import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NotesPage from './components/NotesPage';
import SideNav from './components/SideNav';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideNav />
          <Route exact path="/" component={NotesPage} />
        </div>
      </Router>
    );
  }
}
// component={FullNote}
export default App;
