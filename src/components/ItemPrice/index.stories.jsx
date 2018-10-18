import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ItemPrice from 'components/ItemPrice';

storiesOf('ItemPrice', module)
    .add('default', () => (
        <div>
            <ItemPrice price={1} />
            <ItemPrice price={199.99} />
            <ItemPrice price={9999} />
        </div>
    ));
