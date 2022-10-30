import React from 'react';
import ShopItem from './ShopItem';

function ShopList({ shops, onDelete }) {
    return (
        <div className='shop-list'>
            {
                shops.map((shop) => (
                    <ShopItem 
                    key={shop.id}
                    id={shop.id}
                    onDelete={onDelete}
                    {...shop}/>
                ))
            }
        </div>
    )
}

export default ShopList;