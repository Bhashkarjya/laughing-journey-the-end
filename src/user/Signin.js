import React from "react";
import Layout from "../core/Layout";
import {API} from "../config";

const Signin = () => {
    return (
        <Layout title="Signin" description="Signin to Ecommerce Site">
             <h1>{API}</h1>
        </Layout>
    )
}

export default Signin;