import React from 'react';
import { storiesOf } from '@storybook/react';
import BooleanComponen from '../03/BooleanComponen';

storiesOf('BooleanComponent', module)
    .add('기본 설정', () => <BooleanComponen/>)
    .add('bored 설정', () => <BooleanComponen bored />)
