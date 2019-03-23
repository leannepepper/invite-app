import React, { Component } from 'react';
import './normalize.css';
import './main.css';
import Header from './Header';
import FilterLists from './FilterLists';
import AddPerson from './AddPerson';
import Invitees from './Invitees'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <Header/>
          <h1 className="app-name"><span>Instant</span> Invite</h1>
          <AddPerson />
          </div>
         <FilterLists />
         <Invitees />
      </div>
    );
  }
}

export default App;
