import React from 'react'
import Navbar from '../components/Navbar'
import Content from '../components/Content' 

const LandingPage = ({userName, setAuth, setLoginFunRun}) => {
    return (
        <div className="container" style={{paddingTop:40}}>
            <div className="row">
                <Navbar userName={userName} setAuth={setAuth} setLoginFunRun={setLoginFunRun}/>
                <Content/>
            </div>
        </div>
    )
}

export default LandingPage
