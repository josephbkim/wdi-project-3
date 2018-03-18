import React, { Component } from 'react';
import { connect } from 'react-redux'

const Toggle = ({ messageVisibility }) => {
    return (
        <div>
            {messageVisibility ?

                <p>Testing to see if you'll see this</p>
                : null
            }
            <button>Toggle Me</button>

        </div>
    );
}

const mapStateToProps = (state) => ({
    messageVisibility: state.message.messageVisibility,
})

export default connect(mapStateToProps)(Toggle);