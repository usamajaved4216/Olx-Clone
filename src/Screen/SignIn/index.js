import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Login } from "../../Config/FireBase";

function SignInPage() {
const [Email, setEmail]= useState()
const [Password, setPassword]= useState()
    
    const navigate =useNavigate()
    const handleSignIN = () => {
        Login({email: Email, password: Password})
    }
    return (
        <div>
            <h1>Login Page</h1>

            <input placeholder="Enter Email"  onChange={(e)=>setEmail(e.target.value)} ></input>
            <input placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} ></input>
            <br/>
            <button onClick={() => handleSignIN()} >SignIn</button>
            <p>Don't You Have An Account</p>
            <span onClick={()=> navigate('/SignUp')} >Signup</span>

        </div>
    )
}

export default SignInPage;