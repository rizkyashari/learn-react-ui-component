import React from 'react';
 
class ShopInput extends React.Component {
    constructor(props) {
        super(props);
      
        // inisialisasi state
        this.state = {
          item: '',
          harga: '',
        }
      
        this.onItemChangeEventHandler = this.onItemChangeEventHandler.bind(this);
        this.onHargaChangeEventHandler = this.onHargaChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        
      }
      
      onItemChangeEventHandler(event) {
        this.setState(() => {
          return {
            item: event.target.value,
          }
        });
      }
      
      onHargaChangeEventHandler(event) {
        this.setState(() => {
          return {
            harga: event.target.value,
          }
        });
      }
      
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addShop(this.state);
      }

 render() {
   return (
     <form className='shop-input shadow p-3 mb-5 bg-body rounded' onSubmit={this.onSubmitEventHandler}>
       <input type="text" placeholder="Item" value={this.state.name} onChange={this.onItemChangeEventHandler} />
       <input type="text" placeholder="Harga" value={this.state.tag} onChange={this.onHargaChangeEventHandler} />
       <button type="submit">Tambah ke Keranjang</button>
     </form>
   )
 }
}
 
export default ShopInput;