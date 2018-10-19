import React from 'react';
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FilterSelection from 'components/FilterSelection';

const options = [
    { id: 1, name: 'Item 1'},
    { id: 2, name: 'Item 2'},
    { id: 3, name: 'Item 3'},
];

storiesOf('FilterSelection', module)
    .addDecorator(StoryRouter())
    .add('with text', () => {
        const props = {
            options,
            icon: 'fire',
            title: 'Filter Title',
            onClick: action('clicked'),
        };
        return <FilterSelection {...props} />;
    });
