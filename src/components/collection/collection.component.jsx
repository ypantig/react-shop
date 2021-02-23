import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection.styles.scss';

const Collection = ({ title, items, id }) => (
  <div className='container collection mb-5'>
    <h2 className='title text-uppercase'>{title}</h2>

    <div className='row'>
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...itemProps }) => (
          <CollectionItem key={id} {...itemProps} />
        ))}
    </div>
  </div>
);

export default Collection;
