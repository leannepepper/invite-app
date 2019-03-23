import React from 'react'; 

const Invitees = () => {
    return (
        <div className="invitees-wrapper">
            <div className="card">
                <div className="name-wrapper">
                    <h3 className="invitee-name">Travis Gester </h3>
                    <button className="edit-button">Edit</button>
                </div>
                <div className="response">
                    <h4>RSVP:</h4>
                    <input type="radio" id="response-yes"/>
                    <label for="response-yes">Yes</label>
                    <input type="radio" id="response-no"/>
                    <label for="response-no">No</label>
                </div>
            </div>
            <div className="card">
                <div className="name-wrapper">
                    <h3 className="invitee-name">Lauren Baker</h3>
                    <button className="edit-button">Edit</button>
                </div>
                <div className="response">
                    <h4>RSVP:</h4>
                    <input type="radio" id="response-yes"/>
                    <label for="response-yes">Yes</label>
                    <input type="radio" id="response-no"/>
                    <label for="response-no">No</label>
                </div>
            </div>
            <div className="card">
                <div className="name-wrapper">
                    <h3 className="invitee-name">Rachel Lara </h3>
                    <button className="edit-button">Edit</button>
                </div>
                <div className="response">
                    <h4>RSVP:</h4>
                    <input type="radio" id="response-yes"/>
                    <label for="response-yes">Yes</label>
                    <input type="radio" id="response-no"/>
                    <label for="response-no">No</label>
                </div>
            </div>
        </div>
    );
}

export default Invitees; 