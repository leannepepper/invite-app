import React from "react";
import Guest from "./Guest";

const GuestList = props => (
  <ul className="invitees-wrapper">
    {props.guests
      .filter(guest => !props.isFiltered || guest.isConfirmed)
      .map((guest, index, id) => (
        <Guest
          id={guest.id}
          key={index}
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          handleConfirmation={() => props.toggleConfirmation(index)}
          isEditing={guest.isEditing}
          handleEditing={() => props.toggleEditing(index)}
          handleRemovePerson={() => props.handleRemovePerson(index)}
          setName={text => props.setNameAt(text, index)}
        />
      ))}
  </ul>
);

export default GuestList;
