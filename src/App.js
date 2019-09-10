import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//components
import Navigation from './components/Navigation'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'
import NoteList from './components/NoteList'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <div className="container p-4">
          <Route exact path = '/' component= {NoteList} />
          <Route exact path = '/create' component= {CreateNote} />
          <Route exact path = '/edit/:id' component= {CreateNote} />
          <Route exact path = '/user' component= {CreateUser} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
