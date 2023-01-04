import React from 'react';
import {render, screen} from '@testing-library/react';

import Input from '../../03/Input';

test('renders react component', () => {
    render(<Input name="name" />);
    // const divElement = screen.getByText(/hello world/i);
    // expect(divElement).toBeInTheDocument();
});


// describe('<Input>', () => {
//     it('renders without crashing', () => {
//
//
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//
//
//
//         const div = document.createElement('div');
//         root.render(<Input name="test_name" />, div)
//
//         // ReactDOM.render(<Input name="test_name" />, div);
//         // ReactDOM.unmountComponentAtNode(div);
//         expect(React.isValidElement(<Input name="test_name" />)).toBeTruthy();
//     });
// });