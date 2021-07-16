import React from 'react'
import {Link} from 'react-router-dom'
import {data} from "../data/articleData"

const MainContent = () => {
    return (
        <div style={{margin:"0 30px"}}>
            {data.map((item, index) => (
                <div>
            <Link to={`/${item.articleName.toLowerCase()}`} style={{textDecoration: "none", color:"black"}}>
                <h1>{index+1}. {item.articleName}</h1>
            </Link>
            <div style={{fontSize:20}}>
                {item.discription}
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop:15, fontWeight:600, fontSize:20}}>
            <Link to={`/${item.articleName.toLowerCase()}`} style={{textDecoration: "none", color:"black"}}>
                <div style={{marginRight: 10}}>Read More.</div>
            </Link>
                <div>7 min read</div>
            </div>
            <div style={{marginTop:30, width:"100%", height:"400px"}}>
                <img src={item.image} alt="No Image Found" width="100%" height="100%"/>
            </div>
            <div style={{margin:"30px 0", display: 'flex'}}>
                                <div style={{padding:10, marginRight:10, border:"1px solid gray", borderRadius:"50%", width:20, height:20, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>i</div>
                <div><strong>{item.author}</strong> in <strong>{item.from}</strong></div>
            </div>
            </div>
            ))}
        </div>
    )
}

export default MainContent
