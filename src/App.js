import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import FullItem from 'scenes/FullItem';
import ItemList from 'components/ItemList';
import FeaturedItem from 'components/Item/FeaturedItem';

import { getProducts } from 'services/StoreData';

class App extends Component {
  render() {
    const product = getProducts()[0];

    return (
      <div className="App" style={{padding: '2rem'}}>
        <FullItem {...product} />
        <hr />
        <ItemList items={getProducts()} />
        <hr />
        <FeaturedItem {...product} />
        </div>
    );
  }
}

export default App;
