import { useNavigate } from "react-router-dom";
import {SignUp} from "../../Config/FireBase";
import { useState } from "react";

function SignUpPage() {
const [fullName, setFullName]= useState()
const [Email, setEmail]= useState()
const [Age, setAge]= useState()
const [Password, setPassword]= useState()


    const navigate =useNavigate()

    const handleSignUp = () => {
        SignUp({email: Email, password: Password})
    }

    return(
        <div>
            <input placeholder="Full Name" onChange={(e)=>setFullName(e.target.value)} />
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
            <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <button onClick={() => handleSignUp()} >Create Account</button>
            <p>
                 Already You Have An Account.
                 <snap onClick={()=> navigate('/SignIn')} >SignIn</snap>
            </p>
        </div>
    )
}

export default SignUpPage;

