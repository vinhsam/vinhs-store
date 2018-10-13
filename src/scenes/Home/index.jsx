import React from 'react';

import FeaturedItem from 'components/Item/FeaturedItem';

import { getFeaturedProduct } from 'services/StoreData';

export default function Home() {
    return <FeaturedItem {...getFeaturedProduct()} />;
}