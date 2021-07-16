import React from 'react'
import {data} from "../data/articleData"

const MainContent = () => {
    return (
        <div style={{margin:"0 30px"}}>
            {data.map((item, index) => (
                <div>
            <h1>{index+1}. {item.articleName}</h1>
            <div style={{fontSize:20}}>
                {item.discription}
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop:15, fontWeight:600, fontSize:20}}>
                <div style={{marginRight: 10}}>Read More.</div>
                <div>7 min read</div>
            </div>
            <div style={{margin:"30px 0 60px 0", width:"100%", height:"400px"}}>
                <img src={item.image} alt="No Image Found" width="100%" height="100%"/>
            </div>
            </div>
            ))}
        </div>
    )
}

export default MainContent
