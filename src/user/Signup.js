import React,{useState} from "react";
import {Link} from "react-router-dom";
import Layout from "../core/Layout";
import {signUp} from "../auth/index";

const Signup = () => {
    const [values,setValues] = useState ({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const {name,email,password,success,error} = values;

    const handleChange = name => event => {
        setValues({...values,error: false, [name]: event.target.value});
    };

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: false});
        signUp({name,email,password})
        .then(data => {
            if(data.error){
                setValues({...values,error:data.error,success:false});
            }
            else{
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                });
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

    const showSuccess = () => {
        return (
            <div className="alert alert-success" style={{display: success ? '': 'none'}}>
                New account has been created. Please <Link to="/signin">Signin</Link>
            </div>
        )
    }

    const signUpForm = () => {
        return (
            <form>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input onChange={handleChange("name")} value={name} type="text" className="form-control"/>
                </div>

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
            {showSuccess()}
            {signUpForm()}
        </Layout>
    )
}

export default Signup;