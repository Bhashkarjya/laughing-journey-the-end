import React from "react";
import { isAuthenticated } from "../auth";
import Layout from "../core/Layout";
import {Link} from "react-router-dom";

const UserDashboard = () => {
    const {user: {_id,name,email,role}} = isAuthenticated();

    const UserLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <ul className="list-group-main">
                        <Link className="nav-link" to="/cart">My Cart</Link>
                    </ul>
                    <ul className="list-group-main">
                        <Link className="nav-link" to="/profile/update">Update Profile</Link>
                    </ul>
                </ul>
            </div>
        )
    }

    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header"> User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{role === 1 ? 'Admin' : 'Registered User'}</li>
                </ul>
            </div>
        )
    }

    const purchaseHistory = () => {
        return (
            <div className="card">
                <h3 className="card-header">Purchase Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">History</li>
                </ul>
            </div>
        )
    }
    return (
        <Layout title="Dashboard" description={`Have a Good Day ${name}`} className='container-fluid'>
            <div className="row">
                <div className="col-3">
                    {UserLinks()}
                </div>
                <div className="col-9">
                    {userInfo()}
                    {purchaseHistory()}
                </div>
            </div>
        </Layout>
    )
}

export default UserDashboard;