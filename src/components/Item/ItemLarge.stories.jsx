import React from 'react';
import { storiesOf } from '@storybook/react';

import { ItemLarge } from 'components/Item';

storiesOf('Item/ItemLarge', module)
    .add('default', () => {
        const props = {
            id: 1,
            name: 'Item Name',
            price: 99.99,
            image: 'squished-shibe.png',
        };
        return <ItemLarge {...props} />;
    });
