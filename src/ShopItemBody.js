import React from 'react';

function ShopItemBody({ item, harga }) {
    return (
        <div className='shop-item__body'>
            <div>
                <h3 className='shop-item__title'>{item}</h3>
                <p className='shop-item__price'>Rp{harga},00</p>
            </div>
        </div>
    )
}

export default ShopItemBody;