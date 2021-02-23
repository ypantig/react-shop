import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, colWidth, size }) => (
  <div className={`menu-item menu-item-${size} col-12 col-md-${colWidth} mb-4`}>
    <div className='inner d-flex align-items-center justify-content-center'>
      <div
        class='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className='content px-3 py-3 text-center'>
        <h3 class='text-uppercase font-weight-bold'>{title}</h3>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  </div>
);

export default MenuItem;
