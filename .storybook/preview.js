import '!style-loader!css-loader!sass-loader!../src/sass/materialize.scss';

const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');

// global하게 적용될 포맷 세팅
addDecorator(jsxDecorator);


