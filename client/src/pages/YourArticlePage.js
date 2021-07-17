import React from 'react'
import {data} from '../data/articleData'

const YourArticlePage = () => {
    return (
        <div style={{paddingTop:60}} className="row">
            <div className="col-1"></div>
            <div className="col-10">
                <div style={{borderTop:"1px solid grey", borderBottom:"1px solid grey", paddingTop:"10px", paddingBottom:"5px"}}>
                    <h4>YOUR SUBMITTED ARTICLES</h4>
                </div>
                <div style={{paddingTop:30}}>
                    {data.map((item) => (
                        <div style={{padding:"30px 0", borderBottom:"1px solid grey"}} className="row">
                            <div className="col-2">
                                <img src={item.image} width="100%" height="100%"/>
                            </div>
                            <div className="col-8" style={{padding:"0 20px"}}>
                                <h5>{item.articleName}</h5>
                                <p>{item.discription}</p>
                            </div>
                            <div className="col-1" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <i class="fa fa-edit fa-2x"></i>
                            </div>
                            <div className="col-1" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <i class="fa fa-trash fa-2x"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-1"></div>
        </div>
    )
}

export default YourArticlePage
