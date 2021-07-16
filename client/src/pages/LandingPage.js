import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Content from '../components/Content' 
import WritePage from './WritePage'
import YourArticlePage from './YourArticlePage'

const LandingPage = ({userName, setAuth, setLoginFunRun}) => {
    return (
        <div className="container" style={{paddingTop:40}}>
            <div className="row">
                <Navbar userName={userName} setAuth={setAuth} setLoginFunRun={setLoginFunRun}/>
                <Switch>
                    <Route path="/write">
                        <WritePage/>
                    </Route>
                    <Route path="/your_article">
                        <YourArticlePage/>
                    </Route>
                    <Route path="/">
                        <Content/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default LandingPage
