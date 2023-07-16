import React, { Component } from 'react';
import ChlidComponents from './ChlidComponents';
import PropTypes from 'prop-types';

class ChlidComponentsTest extends Component {
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
                <div>불리언값 : {boolValue ? 'true' : 'false'}</div>
                <div>넘버값 : {numberValue}</div>
                <div>배열값 : {arrayValue}</div>
                <div>객체값 : {JSON.stringify(objValue)}</div>
                <div>노드값 : {nodeValue}</div>
                <div>함수값 : {String(funcValue)}</div>

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
    funcValue : PropTypes.func

}

export default ChlidComponentsTest;