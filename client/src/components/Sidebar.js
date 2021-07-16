import React from 'react'
import {data} from '../data/articleData'

const Sidebar = () => {
    return (
        <div style={{marginLeft:30}}>
            <h4 style={{padding:"10px 0", borderTop: "1px solid black", borderBottom: "1px solid black"}}>
                TOP ARTICLES
            </h4>
            <div style={{paddingTop:30}}>
                {data.map((item,index) => (
                    <div className="row">
                        <div className="col-8" style={{paddingBottom:40}}>
                            <div style={{display: 'flex', marginBottom:10}}>
                                <div style={{padding:10, marginRight:10, border:"1px solid gray", borderRadius:"50%", width:20, height:20, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>i</div>
                                <div><strong>{item.author}</strong> in <strong>{item.from}</strong></div>
                            </div>
                            <h5>{item.articleName}</h5>
                            <div>
                                Jun 10 . 6 min read
                            </div>
                        </div>
                        <div className="col-4" width="100%" height="100%">
                            <img src={item.image} width="100%" height="100"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
