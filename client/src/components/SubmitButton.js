import React, { Component } from 'react'
import styled from 'styled-components'



class SubmitButton extends Component {

    render() {

        const Button = styled.button`
            border-radius: 5px;
            background-color: #6B983F;
            color: #bfd964;
            border-radius: 5px;
            padding: 5px;
            margin: 8px;
        `

        return (
            <div>
                <Button>Submit</Button>
            </div>
        )
    }
}

export default SubmitButton;