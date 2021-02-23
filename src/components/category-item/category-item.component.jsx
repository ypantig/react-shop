import React from 'react';
import { withRouter } from 'react-router-dom';

import './category-item.styles.scss';

const CategoryItem = ({ title, imageUrl, colWidth, size, history, linkUrl, match }) => (
  <div
    className={`category-item category-item-${size} col-12 col-md-${colWidth} mb-4`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(CategoryItem);
