import React from "react";

const Login = () =>{

    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chaton Web</span>
                <span className="title">Register</span>
                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    
                    <button>Sign in</button>
                </form>
                <p>Don't have an account ? Register</p>
            </div>
        </div>
    )
}

export default Login;