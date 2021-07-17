import React from 'react'

const WritePage = () => {
    return (
        <div style={{paddingTop:30}} className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <h4 style={{paddingBottom:10}}>TITLE</h4>
                <div style={{paddingBottom:30}}>
                    <input type="text" style={{backgroundColor:'#f2f2f2', border:"none", width:"100%", height:"50px", borderRadius:5}}/>
                </div>
                <h4 style={{paddingBottom:10}}>DESCRIPTION</h4>
                <div style={{paddingBottom:30}}>
                    <textarea style={{backgroundColor:'#f2f2f2', border:"none", width:"100%", height:"300px"}}/>
                </div>
                <div style={{ marginTop: 36,paddingBottom:60}}>
                  <label htmlFor="file-upload" style={{ width: 180, height: 35, border: "none", background: "gray", fontSize:16 , textDecoration: "none", display: "inline-block", padding: "5px 12px", cursor: "pointer", borderRadius: 5, textAlign: "center", color: "white"}}>
                    Upload File
                  </label>
                  <input id="file-upload" type="file" accept=".jpg,.png" readOnly={false} style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: "-1px", overflow: "hidden", border: 0 }}
                    onClick={(e) => {
                      e.target.value = null
                    }}
                    // onChange={(event) => this.handleFileUpload(event)} 
                  />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button style={{border:"none", backgroundColor:"gray", borderRadius:5, color:"white", width: 180, height: 35}}>Publish</button>
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    )
}

export default WritePage
