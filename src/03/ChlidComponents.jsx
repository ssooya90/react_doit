import React, {Component } from 'react';
import PropTypes from 'prop-types';

class ChlidComponents extends Component {
    render() {
        const {
            boolValue,
            numberValue,
            arrayValue,
            objValue,
            nodeValue,
            funcValue
        } = this.props;

        return (
            <div>
                <span>불리언값 : {boolValue}</span>
                <span>불리언값 : {numberValue}</span>
                <span>불리언값 : {arrayValue}</span>
                <span>불리언값 : {String(objValue)}</span>
                <span>불리언값 : {nodeValue}</span>
                <span>불리언값 : {String(funcValue)}</span>

            </div>
        );
    }
}

ChlidComponents.propTypes = {

    boolValue : PropTypes.bool,
    numberValue : PropTypes.number,
    arrayValue : PropTypes.arrayOf(PropTypes.number),
    objValue : PropTypes.object,
    nodeValue : PropTypes.node,
    funcValue : PropTypes.func,

}

export default ChlidComponents;