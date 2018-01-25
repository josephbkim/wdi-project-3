import React, { Component } from 'react'
import styled from 'styled-components'



class SubmitButton extends Component {

    render() {
        
        const Button = styled.button`
        color: #66BB6A;;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #66BB6A;;
        border-radius: 3px;
        `
    
        return (
            <div>
                <Button>Submit</Button>
            </div>
        )
    }
}

export default SubmitButton;