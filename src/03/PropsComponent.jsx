import React from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

// 자료헝을 선언하는 예제
PropsComponent.propTypes = {
    name: PropTypes.string,
};

export default PropsComponent;