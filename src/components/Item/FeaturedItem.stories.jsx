import React from 'react';
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import { FeaturedItem } from 'components/Item';

storiesOf('Item/FeaturedItem', module)
    .addDecorator(StoryRouter())
    .add('default', () => {
        const props = {
            id: 1,
            name: 'Item Name',
            price: 99.99,
            image: 'squished-shibe.png',
        };
        return <FeaturedItem {...props} />;
    });
