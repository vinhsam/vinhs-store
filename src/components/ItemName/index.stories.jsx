import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ItemName from 'components/ItemName';

storiesOf('ItemName', module)
    .add('default', () => {
        return <ItemName>Happy Pupper</ItemName>
    });
