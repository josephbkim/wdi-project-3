import React from 'react'
import SubmitButton from './SubmitButton'
import styled from 'styled-components'

function NewGarden(props) {
    return (
        <div>
            <h6>Do you own a shared garden space? Sign up below to track your garden and the gardeners sharing the space</h6>
            <div>
                <form style={newFormStyle} onSubmit={props.createGarden}>
                    <div>
                        <label htmlFor="name">Garden Name</label>
                    </div>
                    <div>
                        <input className="form-input" onChange={props.handleChange} name="name" type="text" value={props.garden.name} />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                    </div>
                    <div>
                        <input onChange={props.handleChange} name="address" type="text" value={props.garden.address} />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                    </div>
                    <div>
                        <input onChange={props.handleChange} name="city" type="text" value={props.garden.city} />
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                    </div>
                    <div>
                        <input onChange={props.handleChange} name="state" type="text" value={props.garden.state} />
                    </div>
                    <div>
                        <SubmitButton/>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewGarden


const newFormStyle = {
    // border: '5px solid green',
    // backgroundColor: '#BEEE62',
    width: 300,
    fontSize: 14,
    color: '#6b983f',
    padding: '20px',
    
}