import React from 'react';

import CheckBox from '../04/CheckBox';
import { storiesOf } from '@storybook/react';
import Text from '../04/Text';

storiesOf('CheckBox', module)
    .add('기본설정', () => <CheckBox name="agree"></CheckBox>)
    .add('예제', () => (
        <CheckBox name="agree">
            <Text>동의합니다</Text>
        </CheckBox>
    ))
    .add("라벨", () => (
        <CheckBox name="agree" label="이름">
            <Text>동의합니다</Text>
        </CheckBox>
    ))
    .add("onChange", () => (
        <CheckBox name="agree" label="이름" checked>
            <Text>동의합니다</Text>
        </CheckBox>
    ))
