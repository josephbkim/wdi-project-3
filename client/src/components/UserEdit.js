import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import SubmitButton from './SubmitButton'


function UserEdit(props) {
        
    return (
        <div>
            <h6>Edit Gardener Info</h6>
            <form style={newFormStyle} onSubmit={props.updateUser}>
                <div>
                    <label htmlFor="name">Garden Name</label>
                    <input onChange={props.handleUserChange} name="name" type="text" value={props.garden.name} />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input onChange={props.handleUserChange} name="address" type="text" value={props.garden.address} />
                </div>
                {/* <div>
                    <label htmlFor="city">City</label>
                    <input onChange={props.handleUserChange} name="city" type="text" value={props.garden.city} />
                </div>
                <div>
                    <label htmlFor="state">State</label>
                    <input onChange={props.handleUserChange} name="state" type="text" value={props.garden.state} />
                </div> */}
                <div>
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    )

}

export default UserEdit

const newFormStyle = {
    // border: '5px solid green',
    // backgroundColor: '#BEEE62',
    width: 300,
    fontSize: 14,
    color: '#6b983f',
    padding: '20px',
    
}

const Button = styled.button`
    border-radius: 5px;
    background-color: #6B983F;
    color: #bfd964;
    border-radius: 5px;
    padding: 5px;
    margin: 8px;
    `