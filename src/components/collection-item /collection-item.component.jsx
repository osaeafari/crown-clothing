import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div 
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{ name }</span>
      <span className='name'>{ price }</span>
    </div>
  </div>
)

export default CollectionItem;