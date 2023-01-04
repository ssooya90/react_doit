import React from 'react';

import Button from '../04/Button';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
.add('기본설정', () => <Button>전송하기</Button>)
.add('기본설정2', () => <Button primary large>안녕하세요</Button>)
