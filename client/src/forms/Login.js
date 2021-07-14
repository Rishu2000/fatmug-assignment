import React from 'react'
import FormInput from './FormInput'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:"gray"}}>
            <div style={{padding:"20px 40px", backgroundColor: 'white', borderRadius:5}}>
                <Link to="/register" style={{textDecoration: "none"}}>Create a new Account</Link>
                <h1 style={{textAlign: 'center', marginBottom:40}}>Login</h1>
                <FormInput formType="email"/>
                <FormInput formType="password"/>
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                    <h6>Forgot Password</h6>
                    <h6>Not a member yet</h6>
                </div>
                <div style={{margin:"30px 0 50px 0", textAlign:"center"}}>
                    <button style={{textDecoration:"none", width:"150px", backgroundColor:"grey", color:"white", border:"none", borderRadius:"2px", height:45}}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
