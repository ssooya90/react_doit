import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComponent extends Component {
    render() {

        let message1 = '';

        if(this.props.boolValue === false){
            message1 = 'boolvalue 기본값이 false입니다';
        }else if(this.props.boolValue === true){
            message1 = 'boolvalue 기본값이 true입니다';
        }

        let meesage2 = '';
        if (this.props.boolValueWithoutDefault === false){
            meesage2 = 'boolValueWithoutDefault 기본값이 false 입니다'
        }


        return (
            <div className="meesage-container">
                {message1}<br/>
                {meesage2}
            </div>
        );
    }
}

DefaultPropsComponent.propTypes ={
    boolValue : PropTypes.bool,
    boolValueWithoutDefault : PropTypes.bool,
}

DefaultPropsComponent.defaultProps = {
    boolValue : true
}

export default DefaultPropsComponent;