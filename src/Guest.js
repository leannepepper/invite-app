import React from "react";
import GuestName from "./GuestName";

const Guest = props => (
  <li className="card">
    <GuestName
      isEditing={props.isEditing}
      handleNameEdits={e => props.setName(e.target.value)}
    >
      {props.name}
    </GuestName>

    <label className="confirmed-label">
      <input
        type="checkbox"
        checked={props.isConfirmed}
        onChange={props.handleConfirmation}
      />{" "}
      confirmed
    </label>
    <button className="edit-button" onClick={props.handleEditing}>
      {props.isEditing ? "save" : "edit"}
    </button>
    <button
      className="remove-button"
      onClick={() => props.handleRemovePerson(props.index)}
    >
      remove
    </button>
  </li>
);

export default Guest;
