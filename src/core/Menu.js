import React from "react";
import {Link, withRouter} from "react-router-dom";

const isActive = (history,path) => {
    if(history.location.pathname === path){
        return {color: 'black'};
    }
    else{
        return {color: 'yellow'};
    }
}

const Menu = ({history}) => {
    return(
        <ul className = "nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history,"/")} to="/">
                    Home
                </Link>
            </li>
            <li className = "nav-item">
                <Link className="nav-link" style={isActive(history,"/signin")} to="/signin">
                    Signin
                </Link>
            </li>
            <li className = "nav-item">
                <Link className="nav-link" style={isActive(history,"/signup")} to="/signup">
                    Signup
                </Link>
            </li>
        </ul>
    )
}

export default withRouter(Menu);