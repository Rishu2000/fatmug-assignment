import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MainContent from './MainContent'
import Sidebar from './Sidebar'
import {data} from '../data/articleData'
import ArticlePage from './ArticlePage'

const Content = () => {
    return (
        <div style={{marginTop:30}} className="row">
            <Switch>
                {data.map((item) => (
                    <Route path={`/${item.articleName.toLowerCase()}`}>
                        <ArticlePage data={item}/>
                    </Route>
                ))}
                <Route path="/">
                    <div className="col-8">
                        <MainContent/>
                    </div>
                    <div className="col-4">
                        <Sidebar/>
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

export default Content
