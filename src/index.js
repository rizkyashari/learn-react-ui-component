import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import ShopApp from './ShopApp';
// import logoShopee from './assets/img/logo-shopee.png'
// import Navbar from './Navbar.js'

// const image = React.createElement('img', {src: {logoShopee}, className: 'card-img-top'})
// const heading = React.createElement('h1', {className: 'card-title'}, 'Shopee');
// const paragraph = React.createElement('p', {className: 'card-text fs-4 fw-bold'}, 'Biodata Perusahaan');
// const listItem1 = React.createElement('li', {className: 'list-group-item'}, 'Nama: PT Shopee International Indonesia');
// const listItem2 = React.createElement('li', {className: 'list-group-item'}, 'Bidang: E-commerce');
// const listItem3 = React.createElement('li', {className: 'list-group-item'}, 'Tagline: Beli semua di Shopee');

// const unorderedList = React.createElement('ul', {className: 'list-group list-group-flush'}, [listItem1, listItem2, listItem3]);
// const cardBody = React.createElement('div', {className: 'card-body'}, [heading, paragraph]);
// const card = React.createElement('div', {className: 'card', style: {width: '18rem'}}, [image, cardBody, unorderedList])

// const element = (
//     <div class="card">
//         <div class="card-body shadow p-5">
//             <img class="card-img-top" src={logoShopee} alt='Logo Shopee'/>
//             <h1 class="card-title d-flex justify-content-center">Shopee</h1>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item"><b>Nama:</b> PT Shopee International Indonesia</li>
//                 <li class="list-group-item"><b>Bidang:</b> E-commerce</li>
//                 <li class="list-group-item"><b>Tagline:</b> Beli semua di Shopee. Gratis Ongkir!</li>
//             </ul>
//             <div class="d-grid gap-2 col-6 mx-auto">
//                 <button class="btn btn-primary" type="button">Visit Website</button>
//             </div>
//         </div>
//     </div>
// )

const root = createRoot(document.getElementById('root'));
// root.render(element);
root.render(<ShopApp/>);