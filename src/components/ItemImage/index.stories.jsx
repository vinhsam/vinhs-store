import React from 'react';
import { storiesOf } from '@storybook/react';

import ItemImage from 'components/ItemImage';

storiesOf('ItemImage', module)
    .add('default', () => <ItemImage image="squished-shibe.png" />)
    .add('specific H x W', () => <ItemImage image="squished-shibe.png" height={150} width={250} />);
