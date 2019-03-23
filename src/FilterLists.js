import React from 'react'; 

const FilterLists= () => {
    return (
        <ul className="fliter-list">
            <li><button>Show Invited</button></li>
            <li><button>Show RSVP: Yes</button></li>
            <li><button>Show RSVP: No</button></li>
        </ul>
    );
}
export default FilterLists; 