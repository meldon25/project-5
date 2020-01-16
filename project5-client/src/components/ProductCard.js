import React, { Component } from 'react'
import ShowMoreText from 'react-show-more-text'
import '../styles/productcard.css'


export default ({ product }) => (
    <>
    <div className="main-card">
        <img className="product-img" src={product.image} />
        {/* <p className="color-desc">{product.color}</p>
        <p className="price-desc">{product.price}</p> */}
    </div>
    </>

    )