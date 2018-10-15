import React from 'react';

import { FeaturedItem } from 'components/Item';

import { getFeaturedProduct } from 'services/StoreData';

export default function Home() {
    return <FeaturedItem {...getFeaturedProduct()} />;
}
