import React from 'react'; 

const Invitees = () => {
    return (
        <div className="invitees-wrapper">
            <div className="card">
                <h3 className="invitee-name">Name</h3>
                <button>Edit</button>
                <div className="response">
                    <h4>RSVP:</h4>
                    <input type="checkbox" id="response-yes"/>
                    <label for="response-yes">Yes</label>
                    <input type="checkbox" id="response-no"/>
                    <label for="response-no">No</label>
                </div>
            </div>
        </div>
    );
}

export default Invitees; 