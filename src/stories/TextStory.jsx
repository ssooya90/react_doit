import React from 'react';

import Text from '../04/Text';
import { storiesOf } from '@storybook/react';

storiesOf('Text', module)
.add('기본설정', () => <Text>안녕하세요</Text>)
.add('기본설정2', () => <Text primary large>안녕하세요</Text>)
