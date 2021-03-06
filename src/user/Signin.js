import React,{useState} from "react";
import {Redirect} from "react-router-dom";
import Layout from "../core/Layout";
import {signIn,authenticate,isAuthenticated} from "../auth/index";

const Signin = () => {
    const [values,setValues] = useState ({
        email: 'bn831833@student.nitw.ac.in',
        password: 'Lmntrix11',
        error: '',
        loading: false,
        redirectToReferrer: false
    });

    const {email,password,loading,error,redirectToReferrer} = values;
    const {user} = isAuthenticated();

    const handleChange = name => event => {
        setValues({...values,error: false, [name]: event.target.value});
    };

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: false, loading: true});
        signIn({email,password})
        .then(data => {
            if(data.error){
                setValues({...values,error:data.error,loading:false});
            }
            else{
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                })
            }
        });
    };

    const showError = () => {
        return (
            <div className="alert alert-danger" style={{display: error ? '': 'none'}}>
                {error}
            </div>
        )
    }

    const showLoading = () => {
        if(loading){
            return (
                <div className="alert alert-info">
                    <h1>Loading...</h1>
                </div>
            )
        }
    }

    const redirectUser = () => {
        if(redirectToReferrer){
            if(user && user.role===1){
                return <Redirect to="/admin/dashboard" />
            }
            else{
                return <Redirect to="/user/dashboard" />
            }
        }
        if(isAuthenticated() && isAuthenticated().user.role === 0){
            return <Redirect to="/" />
        }
    }

    const signInForm = () => {
        return (
            <form>
                <div className="form-group">
                    <label className="text-muted">Email</label>
                    <input onChange={handleChange("email")} value={email} type="email" className="form-control"/>
                </div>

                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input onChange={handleChange("password")} value={password} type="password" className="form-control"/>
                </div>
                <button onClick={clickSubmit} className="btn btn-primary" type="Submit">Submit</button>
            </form>
        )       
    }
    return (
        <Layout title="SignUp" description="Signup to the ecommerce site" className="container col-md-8 offset-md-2">
            {showError()}
            {showLoading()}
            {signInForm()}
            {redirectUser()}
        </Layout>
    )
}

export default Signin;