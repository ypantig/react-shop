import React from 'react';
import Collection from '../../components/collection/collection.component';

import SHOP_DATA from './shop.data';

import './shop.styles.scss';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className='shop'>
        {this.state.collections.map(({ id, ...collectionProps }) => (
          <Collection key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
