import React from "react";

const GuestName = props => {
  if (props.isEditing) {
    return (
      <input
        type="text"
        value={props.children}
        onChange={props.handleNameEdits}
        className="input-name"
      />
    );
  }
  return <span className="invitee-name">{props.children}</span>;
};

export default GuestName;
