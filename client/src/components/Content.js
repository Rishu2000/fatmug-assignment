import React from 'react'
import MainContent from './MainContent'
import Sidebar from './Sidebar'

const Content = () => {
    return (
        <div style={{marginTop:30}} className="row">
            <div className="col-8">
                <MainContent/>
            </div>
            <div className="col-4">
                <Sidebar/>
            </div>
        </div>
    )
}

export default Content
