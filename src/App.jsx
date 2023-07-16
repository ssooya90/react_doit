import React from 'react';
import './sass/materialize.scss';
import './App.css';
import ChildProperty from './03/ChildProperty';

class App extends React.Component {

    render() {



        return (


            <div>
                

                <ChildProperty>
                    <div>
                        <button type="button">a</button>
                        <button type="button">a</button>
                        <button type="button">a</button>
                        <button type="button">a</button>
                    </div>
                </ChildProperty>

                <nav>
                    <div className="nav-wrapper">
                        <div>두잇! 리액트 시작하기</div>
                    </div>
                </nav>
                <h1>머티리얼 CSS</h1>
            </div>
        );
    }
}

export default App;