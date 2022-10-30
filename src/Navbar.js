import React from 'react';
import logoShopee from './assets/img/shopee-logo.png';
import './App.css'
// import { createRoot } from 'react-dom/client';

function Navbar() {
    return (
        <nav class="navbar sticky-top navbar-expand-lg">
            <div class="container-fluid">
               <img src={logoShopee} class="navbar-brand" alt="Logo Shopee" href="#"/>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul class="navbar-nav">
                     <li class="nav-item">
                        <a class="nav-link fw-bold" href="index.html">HOME</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link fw-bold" href="about.html">ABOUT US</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link fw-bold" href="courses.html">COURSES</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link fw-bold" href="portfolio.html">PORTFOLIO</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link fw-bold" href="contact.html">CONTACT</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link-active fw-bold" href="tracker.html">SHOP</a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
    )
}

export default Navbar;