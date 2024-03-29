import { useNavigate } from "react-router-dom";
import {SignUp} from "../../Config/FireBase";
import { useState } from "react";
import olx from '../../Assest/ulx.svg'

function SignUpPage() {
const [fullName, setFullName]= useState()
const [email, setEmail]= useState()
const [age, setAge]= useState()
const [password, setPassword]= useState()


    const navigate =useNavigate()

    const signup = async () => {
      try {
          await SignUp({ fullName, age, email, password });
          navigate('/SignIn')
      } catch (error) {
          console.log("🚀 ~ register ~ error:", error)
      }
  }

    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ background: 'rgb(240, 235, 235)', width: '90%', maxWidth: '400px', textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
    <div style={{display:"flex", justifyContent:'center'}}>
         <img style={{width:'40px',}} src={olx} >
          </img>
        <h2 style={{marginLeft:'10px'}} >OLX Login Page</h2>
        </div>
      <input style={{ width: '80%', height: '30px', border: 'none', margin: '10px 0' }} placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} />
      <input style={{ width: '80%', height: '30px', border: 'none',  margin: '10px 0' }} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input style={{ width: '80%', height: '30px', border: 'none',  margin: '10px 0' }} placeholder="Age" onChange={(e) => setAge(e.target.value)} />
      <input style={{ width: '80%', height: '30px', border: 'none',  margin: '10px 0' }} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button style={{ width: '100%', height: '30px', border: 'none', background: 'rgb(51, 47, 122)', color: 'white' }} onClick={signup}>Create Account</button>
      <p>
        Already Have An Account.
        <span onClick={() => navigate('/SignIn')}>SignIn</span>
      </p>
    </div>
  </div>

        
    ) 
}

export default SignUpPage;

