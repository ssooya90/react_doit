import React from 'react';
import DefaultPropsComponent from './03/DefaultPropsComponent';


class App extends React.Component {


    render() {

        return (
            <DefaultPropsComponent

                // 파라미터 전달
                boolValueWithoutDefault = {false}
            />
        );
    }
}

export default App;