import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './category.styles.scss';

class Category extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          colWidth: 4,
          linkUrl: 'shop/hats',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          colWidth: 4,
          linkUrl: 'shop/jackets',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          colWidth: 4,
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          id: 4,
          colWidth: 6,
          size: 'large',
          linkUrl: 'shop/womens',
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          id: 5,
          colWidth: 6,
          size: 'large',
          linkUrl: 'shop/mens',
        },
      ],
    };
  }

  render() {
    return (
      <div className='category row'>
        {this.state.sections.map(({ title, imageUrl, id, colWidth, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} colWidth={colWidth} size={size} />
        ))}
      </div>
    );
  }
}

export default Category;
