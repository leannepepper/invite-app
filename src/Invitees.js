import React from 'react'; 

const Invitees = (props) => {
    return (
      
        <div className="card">
            <div className="name-wrapper">
                <h3 className="invitee-name">{props.name}</h3>
                <div className="buttons">
                    <button className="card-button"><i class="fas fa-pencil-alt"></i></button>
                    <button onClick= {() => props.removePerson(props.id)}className="card-button"><i class="fas fa-times"></i></button>
                </div>
            </div>
            <div className="response">
                <h4>RSVP:</h4>
                <div>
                    <input type="radio" id="response-yes"/>
                    <label for="response-yes">Yes</label>
                </div>
                <div>
                    <input type="radio" id="response-no"/>
                    <label for="response-no">No</label>
                </div>
            </div>
        </div>
   

       
    );
}

export default Invitees; 