import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({userName, setAuth, setLoginFunRun}) => {

    const handleLogout = () =>{
        setLoginFunRun(false)
        setAuth(false)
    }

    return (
        <div style={{display: 'flex', justifyContent:'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Link to="/" style={{textDecoration: "none", color:"black"}}>
                    <h1 style={{marginTop:15, marginRight:10}}>FATMUG</h1>    
                </Link>
                <div style={{fontSize:45, fontWeight:100, marginRight:10}}>|</div>
                <h4 style={{marginTop:17}}>Greetings! {userName}</h4>
            </div>        
            <div style={{display: 'flex',alignItems: 'center'}}>
                <Link to="/write">
                <button style={{marginRight:20, border:"none", fontSize:20, padding:"5px 20px", backgroundColor:"gray", borderRadius:5, color:"white"}}>Write</button>
                </Link>
                <Link to="/your_article">
                <button style={{marginRight:20, fontSize:20, border:"1px solid gray", backgroundColor: 'white', borderRadius:5, padding:"5px 20px", fontWeight:600}}>Your Article</button>
                </Link>
                <button style={{fontSize:20, border:"none", backgroundColor:"white", fontWeight:600}}
                    onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar
