import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Home from "./core/Home";
import UserDashboard from "./user/UserDashboard";
import PrivateRoute from "./auth/PrivateRoute";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;