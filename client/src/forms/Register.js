import React, {useState} from 'react'
import axios from 'axios'       //Implemented axios functionality.
import {Link} from 'react-router-dom'

const Register = ({setAuth, setRegError, setUserName}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('')


    let data = JSON.stringify({
        "name": name,
        "password": password,
        "email": email
    });
    
    let config = {
        method:'POST',
        url:'http://localhost:3001/register',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: data
    };
    const handleRegister = () => {
        console.log(`State { name = ${name}, password = ${password}, email = ${email}, confirmPass = ${confirmPass}}`);
        if(password === confirmPass) {
            axios(config)
            .then(function (response) {
                setRegError(false);
                setUserName(name);
                setAuth(response.data.Authintication)
                console.log(JSON.stringify(response.data));
            })
            .catch(function (err) {
                setRegError(true)
                console.log(err)
            })
        }
        else{
            console.log("Please enter correct password")
        }
    }

    return (
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:"gray"}}>
            <div style={{padding:"20px 40px", backgroundColor: 'white', borderRadius:5}}>
                <Link to="/login" style={{textDecoration: "none"}}>Already a member</Link>
                <h1 style={{textAlign: 'center', marginBottom:40}}>Register</h1>
                <form>
                    <div className="mb-4" style={{width:"500px"}}>
                        <input type="text" className="form-control mb-4" placeholder="Name" value={name}
                            onChange={(e) => setName(e.target.value)}/>
                        <input type="email" className="form-control mb-4" placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" className="form-control mb-4" placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        <input type="password" className="form-control mb-4" placeholder="Confirm Password" value={confirmPass}
                            onChange={(e) => setConfirmPass(e.target.value)}/> 
                    </div>
                </form>
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                    <h6></h6>
                    <h6>Not a member yet</h6>
                </div>
                <div style={{margin:"30px 0 50px 0", textAlign:"center"}}>
                    <Link to="/">
                        <button style={{textDecoration:"none", width:"150px", backgroundColor:"grey", color:"white", border:"none", borderRadius:"2px", height:45}}
                            onClick={handleRegister}
                        >Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register
