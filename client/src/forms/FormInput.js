import React from 'react'

const FormInput = ({formType, textInput}) => {
    return (
        <div>
            <form>
            <div className="mb-4" style={{width:"500px"}}>
                <input type={formType} className="form-control" placeholder={textInput || formType}/> 
            </div>
            </form>
        </div>
    )
}

export default FormInput
