import React,{useState} from "react";
import Layout from "../core/Layout";

const Signup = () => {
    const [values,setValues] = useState ({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const {name,email,password} = values;

    const handleChange = name => event => {
        setValues({...values,error: false, [name]: event.target.value});
    };

    const signUp = (user) => {
        console.log(name, email, password);
        fetch('http://localhost:8000/api/signup',{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => {
            return response.json();
        }).catch(err => {
            console.log(err);
        });
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        signUp({name,email,password});
    };

    const signUpForm = () => {
        return (
            <form>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input onChange={handleChange("name")} type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label className="text-muted">Email</label>
                    <input onChange={handleChange("email")} type="email" className="form-control"/>
                </div>

                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input onChange={handleChange("password")} type="password" className="form-control"/>
                </div>
                <button onClick={clickSubmit} className="btn btn-primary" type="Submit">Submit</button>
            </form>
        )       
    }
    return (
        <Layout title="SignUp" description="Signup to the ecommerce site" className="container col-md-8 offset-md-2">
            {signUpForm()}
            {JSON.stringify(values)}
        </Layout>
    )
}

export default Signup;