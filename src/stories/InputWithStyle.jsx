import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../04/InputWithStyle';

storiesOf('InputWithStyle', module)
    .add('기본 설정', () => <Input name="name" />)
    .add('label 예제', () => <Input name="name" label="이름" />)
    .add('value 예제', () => <Input name="name" label="이름" value="두잇"/>)
    .add('autoFocus 예제', () => <Input name="name" label="이름" value="두잇" autoFocus/>)
    .add('errorMessage 예제', () => <Input name="name" label="이름" errorMessage="이름을 입력해주세요" />);