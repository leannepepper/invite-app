import React, { Component } from "react";
import "./normalize.css";
import "./main.css";
import Header from "./Header";
import FilterLists from "./FilterLists";
import AddPerson from "./AddPerson";
import GuestList from "./GuestList";

class App extends Component {
  state = {
    isFiltered: false,
    guests: [
      {
        name: "Travis Smith",
        id: 1,
        isEditing: false,
        isConfirmed: false
      },
      {
        name: "Rachel Cobb",
        id: 2,
        isEditing: false,
        isConfirmed: false
      }
    ]
  }; //End State

  toggleFilter = () => this.setState({ isFiltered: !this.state.isFiltered });

  getTotalInvited = () => this.state.invitees.length;
  //  getAttendingGuest = () =>
  //  getUnattendingGuest = () =>

  prevInviteeId = 2;

  toggleProperty = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  toggleConfirmation = index => this.toggleProperty("isConfirmed", index);
  toggleEditing = index => this.toggleProperty("isEditing", index);

  setNameAt = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name: name
          };
        }
        return guest;
      })
    });

  handleAddPerson = name => {
    this.setState({
      guests: [
        {
          name: name,
          id: (this.prevInviteeId += 1),
          isEditing: false,
          isConfirmed: false
        },
        ...this.state.guests
      ]
    });
  };

  handleRemovePerson = id => {
    this.setState(prevState => {
      return {
        guests: prevState.guests.filter(i => i.id !== id)
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <Header />
          <h1 className="app-name">
            <span>Instant</span> Invite
          </h1>
          <AddPerson addPerson={this.handleAddPerson} />
        </div>
        <FilterLists
          isFiltered={this.state.isFiltered}
          toggleFilter={this.toggleFilter}
        />
        <div className="invitees-wrapper">
          <GuestList
            guests={this.state.guests}
            removePerson={this.handleRemovePerson}
            toggleConfirmation={this.toggleConfirmation}
            toggleEditing={this.toggleEditing}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
          />
        </div>
      </div>
    );
  }
}

export default App;
