import React from 'react'; 

const Header = () => {
    return (
        <header className="header">
            <h3 className="header-name"><span>Instant</span> Invite</h3>
            <div className="sign-up-buttons">
            <button className="sign-up">Sign Up</button>
            <button className="sign-in">Sign In</button>
        </div>
        </header>
    );
}

export default Header; 