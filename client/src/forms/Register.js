import React from 'react'
import FormInput from './FormInput'
import {Link} from 'react-router-dom'

const Register = () => {
    return (
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:"gray"}}>
            <div style={{padding:"20px 40px", backgroundColor: 'white', borderRadius:5}}>
                <Link to="/login" style={{textDecoration: "none"}}>Already a member</Link>
                <h1 style={{textAlign: 'center', marginBottom:40}}>Register</h1>
                <FormInput formType="email"/>
                <FormInput formType="password"/>
                <FormInput formType="password" textInput="Confirm password"/>
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                    <h6></h6>
                    <h6>Not a member yet</h6>
                </div>
                <div style={{margin:"30px 0 50px 0", textAlign:"center"}}>
                    <button style={{textDecoration:"none", width:"150px", backgroundColor:"grey", color:"white", border:"none", borderRadius:"2px", height:45}}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Register
