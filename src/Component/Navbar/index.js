import TopOlx from '../../Assest/olx top.svg'
import TopCar from '../../Assest/car-front.svg'
import TopBuilding from '../../Assest/building.svg'
import BottomOlx from '../../Assest/olx.svg'
import { useNavigate } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Config/FireBase";
import { useEffect, useState } from 'react'


function Navbar() {
    const navigate = useNavigate();
    const [user, setUser]= useState(null)

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log("🚀 ~ onAuthStateChanged ~ user:", user)
              setUser(user)
              // ...
            } else {
              setUser(null)
            }
          });
    },[])
    return (

        <div>
            <header style={{ background: 'rgb(239, 236, 236)' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }} >
                    <img style={{ width: '40px', padding: '0px 30px' }} src={TopOlx} ></img>
                    <img style={{ padding: '0px 4px 0px 0px' }} src={TopCar} ></img>
                    <a style={{ padding: '12px 20px 0px 0px' }}>MOTORS</a>
                    <img style={{ padding: '0px 4px 0px 0px' }} src={TopBuilding} ></img>
                    <a style={{ padding: '12px 1px 0px 0px' }}>PROPERTY</a>

                </div>
            </header>
            <nav style={{ background: 'rgb(239, 236, 236)', display: 'flex', justifyContent: 'flex-start' }} className='BottomNavbar' >

                <img className='mediaremove' style={{ width: '80px', padding: '0px 20px' }} src={BottomOlx} ></img>
                <input className='inp' style={{
                    width: '15rem',
                    height: '40px',
                    margin: '12px 10px 0px 0px',
                    border: '2px solid black',
                    borderRadius: '5px'
                }} placeholder='Pakistan' ></input>
                <input className='Inp' style={{ width: '45rem', height: '40px', margin: '12px 15px 0px 0px', border: '2px solid black', borderRadius: '5px' }} placeholder='Pakistan' ></input>


                 {user?
                <h4>{user.email}</h4>
                :

                <button onClick={() => navigate('/SignIn')} style={{ height: '3rem', fontWeight: 'bold', fontSize: '15px', marginTop: '10px', border: 'none', background: 'none' }} ><u>Login</u></button>
                }

            <button onClick={()=>navigate('/PostData')}>Add Cart</button>
            </nav>
        </div>

    )
}
export default Navbar;