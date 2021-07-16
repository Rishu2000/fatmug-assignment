import React from 'react'

const ArticlePage = ({data}) => {

    return (
        <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
                <div style={{width: '100%',height:"600px",marginBottom:40}}>
                    <img src={data.image} alt={data.articleName} width="100%" height="100%"/>
                </div>
                <div>
                    <div style={{display: 'flex', justifyContent:'space-between',paddingBottom:30, borderBottom:"1px solid grey"}}>
                        <div>
                            <h1>{data.articleName}</h1>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div style={{fontSize:25, marginRight:10}}><i>Jun 10.</i></div>
                            <h3><i>6 min read</i></h3>
                        </div>
                    </div>
                    <div style={{padding:"30px 0"}}>
                        <p>{data.discription}</p>
                        <p>{data.content}</p>
                    </div>
                    <div style={{padding:"30px 0", display: 'flex', alignItems: 'center'}}>
                        <i className="fa fa-user-circle fa-2x" style={{padding:"0 10px"}}></i>
                        <div style={{fontSize:20}}><i> by <strong>{data.author}</strong> </i></div>
                    </div>
                </div>
            </div>
            <div className="col-1"></div>
        </div>
    )
}

export default ArticlePage
