import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from 'components/Header';

storiesOf('Header', module)
    .add('with text', () => (
        <Header>Page Header</Header>
    ));
