import React from 'react';
import { storiesOf } from '@storybook/react';
import NewCounter from '../03/NewCounter';
import 'storybook-addon-jsx/register';



storiesOf('NewCounter',module).add('기본설정2', ()=> <NewCounter count={0} />);