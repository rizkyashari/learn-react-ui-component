import React from 'react';
import ShopItemBody from './ShopItemBody';
import ShopItemImage from './ShopItemImage';
import DeleteButton from './DeleteButton';

function ShopItem({image, item, harga, id, onDelete}) {
    return (
        <div className='shop-item shadow-lg p-3 mb-5 bg-body rounded'>
            <ShopItemImage image={image}/>
            <ShopItemBody item={item} harga={harga}/>
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    )
}

export default ShopItem;