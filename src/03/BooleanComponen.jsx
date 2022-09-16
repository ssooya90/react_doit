import React, { Component } from 'react';

class BooleanComponen extends Component {
    render() {

        const message = this.props.bored ? '놀러가자' : '하던 일이나'

        return (
            <div className="meesage-container">
                {message}
            </div>
        );
    }
}

export default BooleanComponen;