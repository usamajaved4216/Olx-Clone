import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Login } from "../../Config/FireBase";
import olx from '../../Assest/ulx.svg'



function SignInPage() {
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()

    const navigate = useNavigate()
    const login = async () => {
        await Login({ email: Email, password: Password }).then((res) => {
            console.log("🚀 ~ awaitLogin ~ res:", res)
            if (res && res.user) {
                navigate('/')

            }
        }).catch(err => {
            console.log("🚀 ~ awaitLogin ~ err:", err)


        })
    }

    return (


        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ background: 'rgb(240, 235, 235)', width: '90%', maxWidth: '400px', textAlign: 'center', padding: '20px' }}>
                <div style={{ display: "flex", justifyContent: 'center' }}>
                    <img style={{ width: '40px', }} src={olx} >
                    </img>
                    <h2 style={{ marginLeft: '10px' }} >OLX Login Page</h2>
                </div>
                <p style={{ display: "flex", marginLeft: '15px' }} >Email</p>
                <input style={{ width: '90%', height: '30px', border: 'none' }} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                <p style={{ display: "flex", marginLeft: '15px' }} >Password</p>
                <input style={{ width: '90%', height: '30px', border: 'none' }} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                <p style={{ display: "flex", marginLeft: '15px' }} >Forgotten Password</p>
                <button style={{ width: '90%', height: '30px', border: 'none', background: 'rgb(51, 47, 122)', color: 'white', cursor: "pointer" }} onClick={login}>Login</button>
                <p>Don't You Have An Account</p>
                <button onClick={() => navigate('/SignUp')}>Register</button>
            </div>
        </div>


    )
}

export default SignInPage;