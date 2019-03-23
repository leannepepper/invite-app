import React, { Component } from 'react';
import './normalize.css';
import './main.css';
import Header from './Header';
import FilterLists from './FilterLists';
import AddPerson from './AddPerson';
import Invitees from './Invitees'; 

class App extends Component {
  state = {
    invitees: [
      {
        name: "Travis Smith",
        id: 1
      },
      {
        name: "Rachel Cobb",
        id: 2
      },
      {
        name: "Lauren Jackson",
        id: 3
      },
      {
        name: "Anthony Lara",
        id: 4
      },
      {
        name: "Wayne Newton",
        id: 5
      }
    ]
  }

  prevInviteeId = 5;

  handleAddPerson = (name) => {
    this.setState({
      invitees: [
        {
          name: name, 
          id: this.prevInviteeId += 1
        },
        ...this.state.invitees
      ]
    })
  }

  handleRemovePerson = (id) => {
    this.setState ( prevState => {
      return {
        invitees: prevState.invitees.filter(i => i.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <Header/>
          <h1 className="app-name"><span>Instant</span> Invite</h1>
          <AddPerson addPerson={this.handleAddPerson} />
          </div>
         <FilterLists />
         <div className="invitees-wrapper">
          {this.state.invitees.map( invitee =>
            <Invitees 
            name={invitee.name}
            id={invitee.id}
            removePerson = {this.handleRemovePerson}
          />
          )}
        </div>
      </div>
    );
  }
}

export default App;
