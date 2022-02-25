import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Richest Man In Babylon</p>
        <p className="product__price">
          <small>Ksh.</small>
          <strong>2500</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://th.bing.com/th/id/R.57f7b4e281138023aaccb3a4cb97d3be?rik=Uh7lbNjHn0LmRg&pid=ImgRaw&r=0"
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product
