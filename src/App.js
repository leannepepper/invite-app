import React, { Component } from 'react';
import './main.css';
import Header from './Header';
import FilterLists from './FilterLists';
import AddPerson from './AddPerson';
import Invitees from './Invitees'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
         <h1 className="app-name">Instant Invite</h1>
         <AddPerson />
         <FilterLists />
         <Invitees />
      </div>
    );
  }
}

export default App;
