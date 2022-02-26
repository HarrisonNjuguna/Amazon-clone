import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Richest Man in Babylon</p>
        <p className="product__price">
          <small>Ksh.</small>
          <strong>2500</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
      </div>

      <img
        src="https://th.bing.com/th/id/R.217d4ccf7f11b02093fd26ee8fe578e5?rik=Yi8YbwQp0E6hRQ&pid=ImgRaw&r=0"
        alt=""
      />

      <button>Add To Basket</button>
    </div>
  )
}

export default Product
