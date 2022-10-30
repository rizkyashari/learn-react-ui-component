import React from 'react';
import ShopList from './ShopList.js'
import { dataItem } from './data.js';
import ShopInput from './ShopInput';
import Navbar from './Navbar'
 
class ShopApp extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     shops: dataItem(),
   }
 
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   this.onAddShopHandler = this.onAddShopHandler.bind(this);
 }
 
 onDeleteHandler(id) {
   const shops = this.state.shops.filter(shop => shop.id !== id);
   this.setState({ shops });
 }
 
 onAddShopHandler({ item, harga }) {
  this.setState((prevState) => {
    return {
      shops: [
        ...prevState.shops,
        {
          id: +new Date(),
          item,
          harga,
          image: '/images/default.jpg',
        }
      ]
    }
  });
}

 render() {
  return (
    <div className="shop-app">
      <Navbar />
      {/* <h2>Tambah ke Keranjang</h2> */}
      <ShopInput addShop={this.onAddShopHandler} />
      <h2>Keranjang Saya</h2>
      <ShopList shops={this.state.shops} onDelete={this.onDeleteHandler} />
    </div>
  );
 }
}
 
export default ShopApp;