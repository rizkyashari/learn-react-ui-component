import React from 'react';

function ShopItemImage({ image }) {
    return (
        <div className='shop-item__image'>
            <img src={image} alt='item avatar' />
        </div>
    )
}

export default ShopItemImage;