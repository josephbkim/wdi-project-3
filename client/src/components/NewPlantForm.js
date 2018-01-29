import React from 'react'
import SubmitButton from './SubmitButton'
import styled from 'styled-components'

function NewPlantForm(props) {
    return (
        <div>
            <h6>Post your new plants</h6>
            <div>
                <form style={newFormStyle} onSubmit={props.createNewPlant}>
                    <div>
                        <label htmlFor="name">Type of Plant</label>
                    </div>
                    <div>
                        <input onChange={props.handlePlantChange} name="name" type="text" value={props.plant.name} />
                    </div>
                    <div>
                        <label htmlFor="quantity">Number Planted</label>
                    </div>
                    <div>
                        <input onChange={props.handlePlantChange} name="quantity" type="number" value={props.plant.quantity} />
                    </div>
                    <div>
                        <label htmlFor="sunlightNeeded">How much sunlight is needed?</label>
                    </div>
                    <div>
                        <input onChange={props.handlePlantChange} name="sunlightNeeded" type="text" value={props.plant.sunlightNeeded} />
                    </div>

                    <div>
                        <Button>Submit</Button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewPlantForm


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