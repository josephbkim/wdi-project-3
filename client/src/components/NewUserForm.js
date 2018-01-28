import React from 'react'
import SubmitButton from './SubmitButton'
import styled from 'styled-components'

function NewUserForm(props) {
    return (
        <div>
            <h6>Sign-up for a garden plot</h6>
            <div>
                <form style={newFormStyle} onSubmit={props.createNewUser}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div>
                        <input className="form-input" onChange={props.handleUserChange} name="firstName" type="text" value={props.user.firstName} />
                    </div>
                    <div>
                        <label htmlFor="address">E-mail</label>
                    </div>
                    <div>
                        <input onChange={props.handleUserChange} name="address" type="text" value={props.user.email} />
                    </div>

                    <div>
                        <SubmitButton/>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewUserForm


const newFormStyle = {
    // border: '5px solid green',
    // backgroundColor: '#BEEE62',
    width: 300,
    fontSize: 14,
    color: '#6b983f',
    padding: '20px',
    
}