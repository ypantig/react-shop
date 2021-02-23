import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, imageUrl, price }) => (
  <div key={id} className='col-12 col-md-3'>
    <div className='card border-0 collection-item'>
      <div
        className='card-img card-img-top image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className='card-body px-0 py-0 mt-3'>
        <div className='d-flex justify-content-between small'>
          <h4 className='small'>{name}</h4>
          <span className='text-right'>{price}</span>
        </div>
      </div>
    </div>
  </div>
);

export default CollectionItem;
