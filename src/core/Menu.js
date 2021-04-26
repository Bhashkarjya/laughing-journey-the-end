import React,{Fragment} from "react";
import {Link, withRouter} from "react-router-dom";
import {signOut, isAuthenticated} from "../auth/index";

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
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history,"/user/dashboard")} to="/user/dashboard">
                    Dashboard
                </Link>
            </li>
            { !isAuthenticated() && (
               <Fragment>
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
                </Fragment>
            )
            }



            {isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <span className="nav-link" style={{cursor: 'pointer', color: 'yellow'}} onClick={() => signOut(
                            () => {
                                history.push('/')
                            }
                        )}>
                            Signout
                        </span>
                    </li>
                </Fragment>
            )}

        </ul>
    )
}

export default withRouter(Menu);