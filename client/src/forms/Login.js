import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Login = ({auth, setAuth, setLoginFunRun, setUserName}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let data = JSON.stringify({
        'email':email,
        'password':password
    })

    let config = {
        method: 'POST',
        url:'https://fatmug-ass.herokuapp.com/login',      //https://fatmug-ass.herokuapp.com
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    }

    const handleLogin = () => {
        setLoginFunRun(true);
        console.log("metrun")
        axios(config)
            .then((res) =>{
                setUserName(res.data.name);
                setAuth(res.data.Authintication)
                console.log(auth)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        console.log(auth);
    },[auth])

    return (
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:"gray"}}>
            <div style={{padding:"20px 40px", backgroundColor: 'white', borderRadius:5}}>
                <Link to="/register" style={{textDecoration: "none"}}>Create a new Account</Link>
                <h1 style={{textAlign: 'center', marginBottom:40}}>Login</h1>
                <form>
                    <div className="mb-4" style={{width:"500px"}}>
                        <input type="email" className="form-control mb-4" placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        <input type="password" className="form-control mb-4" placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                </form>
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                    <h6>Forgot Password</h6>
                    <h6>Not a member yet</h6>
                </div>
                <div style={{margin:"30px 0 50px 0", textAlign:"center"}}>
                    <Link to="/">
                        <button style={{textDecoration:"none", width:"150px", backgroundColor:"grey", color:"white", border:"none", borderRadius:"2px", height:45}}
                            onClick={handleLogin}
                        >Login    
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
