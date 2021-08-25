import {Link as ReactLink} from 'react-router-dom';

function NavBar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">{props.logo}</span>

                <div className="d=flex">                    
                    <ReactLink className="btn btn-primary mx-1" to="/userprofile"> Your Profile</ReactLink>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;